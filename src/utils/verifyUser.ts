import { UserModel } from "../models/userModel";
import { createHttpError } from "../error/http";

export async function accountExist(email: string) {

    try {
        const account = await UserModel.findOne({
            where: { email: email }
        });

        if(account){
            return createHttpError("409"); // 409 Conflict: Email already in use
        }
        return null;
    } catch (error: any) {
        return createHttpError("500"); // 500 server error
    }
} // function to verify if account exist

export async function getAccountByEmail(email: string) {

    try {
        const account = await UserModel.findOne({
            where: { email: email }
        });

        if(!account){
            return createHttpError("404"); // account not found
        }

        return account; // retorn the account
    } catch (error: any) {
        return createHttpError("500"); // 500 server error
    }
} // function to get the account by email