import { UserService } from '../services/userService';
import { Request, Response} from 'express';

export class UserController {
    static create = async(req: Request, res: Response) =>{
        try {
            const {name, email, password} = req.body;
            const newAccount = await UserService.createAccount(
                name,
                email,
                password
            );
            res.status(201).json(newAccount);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
     static login = async(req: Request, res: Response) =>{
        try {
            const { email, password } = req.body;
            const response = await UserService.login(email, password);
            res.status(200).json(response);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}