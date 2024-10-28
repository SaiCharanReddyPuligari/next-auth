import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();


export async function POST(request:NextRequest) {
    try {
        const reqBody= await request.json();
        console.log("Hello failed 1");
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exits
        const user= await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "User not  found"}, {status: 400});
        }

        //check for password
        const validPassword = await bcryptjs.compare(password, user.password);

        if(!validPassword){
            return NextResponse.json({error: "Invalid Password"}, {status: 400});
        }

        //once validating the password, we create a token for user using jsonwebtoken
        const tokenData= {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        //creating token 
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});
        
        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
        })

        response.cookies.set("token", token,{
            httpOnly: true,     
            }
        )

        return response;
    } catch (error : unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
        }
    }
}