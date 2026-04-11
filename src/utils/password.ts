import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export function hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, parseInt(process.env.SALTROUNDS || '10'), (err, hash) => {
            if (err) {
                return reject(err);
            }
            resolve(hash);
        });
    });
} // create a password with the hash

export function comparePassword(password: any, hash: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) {
                return {
                    success: false,
                    message: "Password incorrect",
                    data: err
                };
            }
            resolve(result);
        });
    });
} // verify the password