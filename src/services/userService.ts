import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";
import { accountExist, getAccountByEmail } from "../utils/verifyUser";
import { hashPassword, comparePassword } from '../utils/password';
import { generateToken } from '../jwt/jwt';
import { createHttpError } from "../error/http";
import dotenv from "dotenv";

dotenv.config();

export class UserService {
    static async createAccount(name: string, email: string, password: string) {
        try {
            const account = await accountExist(email);

            if (account && "status" in account) {
                return account; // 409 Conflict: Email already in use
            }

            const hashedPassword = await hashPassword(password);

            const newAccount = await UserModel.create({
                id: 0,
                name,
                email,
                password: hashedPassword
            });

            return newAccount;
        } catch (error: any) {
            return createHttpError("500"); // server error
        }
    } // function to create a new user

    static async login(email: string, password: string) {
        try {
            const account = await getAccountByEmail(email);

            if ('status' in account) {
                // Significa que a função retornou um erro padronizado
                return account;
            }

            if (!password) {
                return createHttpError("406"); // Not Acceptable: Invalid password
            }

            const isPasswordValid = await comparePassword(password, account.get('password') as string);
            if (!isPasswordValid) {
                return createHttpError("401"); // Unauthorized: wrong password
            }

            const token = generateToken({ id: account.get('id') as number, email: account.get('email')as string });
            if (!token) {
                return createHttpError("500"); // Internal server error: failed to generate token
            }

            return {
                account,
                token
            };
        } catch (error) {
            return createHttpError("500"); // erro interno genérico
        }
    } // login function

    static async logout(req: Request, res: Response, next: NextFunction) {
        // not ready
    }
}