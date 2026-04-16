import { jwtConfig } from "../jwt/jwtConfig";
import jwt from "jsonwebtoken";

export function generateToken(payload: object) {
    try {
        const privateKey = jwtConfig.secret;
        return jwt.sign(payload, privateKey, { algorithm: jwtConfig.algorithm as jwt.Algorithm, expiresIn: jwtConfig.expiresIn });

    } catch (error) {
        console.error("Erro " + error);
    }
}

export function verifyToken(token: string) {
    try {

        if (!token) {
            return { status: 403, message: "Token não fornecido" };
        }

        const validation = jwt.verify(token, jwtConfig.secret);
        if (!validation) {
            return { status: 401, message: 'Token inválido' };
        }

    } catch (error: any) {
        return error.message;
    }
}