import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
    try {
       const reqBody= await request.json();
       console.log("Hello failed 1");
       const {username, email, password} = reqBody;
       console.log(reqBody);

       const user= await User.findOne({email});

       if(user){
        return NextResponse.json({error: "User already exists"}, {status: 400});
       }
        
       //hash
       const salt = await bcryptjs.genSalt(10);
       const hashPassword = await bcryptjs.hash(password, salt);

       //create user

       const newUser = new User({
        username, 
        email,
        password: hashPassword,
       })

       const savedUser= await newUser.save();
       console.log("Hello failed 2");
       
       console.log(savedUser);

       //send verify email
       await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

       return NextResponse.json({
        message: "User created successfully",
        success: true,
        savedUser,
       })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}