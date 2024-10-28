import { NextRequest } from "next/server";
import  jwt from "jsonwebtoken";

interface TokenPayload {
    id: string;  // Adjust as needed based on your token's structure
}

export const getDataFromToken = (request: NextRequest) =>{
    try {
        const token= request.cookies.get('token')?.value || '';
        
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as TokenPayload;
        return decodedToken.id;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            throw new Error(error.message);  // Re-throw the error with its message
        } else {
            console.log("An unknown error occurred");
            throw new Error("Unknown error");
        }
    }
}