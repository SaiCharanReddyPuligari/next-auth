import { log } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection=mongoose.connection;

        connection.on('connected', ()=>{
            console.log("mongoDB connected successfully");
        })
        
        connection.on('error', (error)=>{
            console.log('MongoDB failed to connect, try again' + error);
        })
    } catch (error) {
        console.log("something is wrong with DB connection");
        console.log(error);
        
    }
}