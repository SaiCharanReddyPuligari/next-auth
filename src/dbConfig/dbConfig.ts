import mongoose from "mongoose";
import { log } from "console";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URL!);
        const connection=mongoose.connection;

        connection.on('connected', ()=>{
            console.log("mongoDB connected successfully");
        })
        
        connection.on('error', (error)=>{
            console.log('MongoDB failed to connect, try again' + error);
            process.exit();
        })
    } catch (error) {
        console.log("something is wrong with DB connection");
        console.log(error);
        
    }
}