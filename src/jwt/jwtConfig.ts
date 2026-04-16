import dotenv from "dotenv";
import { join } from "path";
import { Algorithm, SignOptions } from "jsonwebtoken";

dotenv.config({ path: join(".env") });

export const jwtConfig: {
    secret: string;
    expiresIn: SignOptions["expiresIn"];
    algorithm: Algorithm;
    refreshTokenExpiresIn: SignOptions["expiresIn"];
} = {
    secret: process.env.SECRET_KEY as string,
    expiresIn: process.env.JWT_EXPIRES as SignOptions["expiresIn"],
    algorithm: process.env.JWT_ALGORITHM as Algorithm,
    refreshTokenExpiresIn: process.env.JWT_REFRESH_EXPIRES as SignOptions["expiresIn"]
};