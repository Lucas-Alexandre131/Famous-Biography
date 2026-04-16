import  express from "express";
import { UserController } from "../controllers/userController";
import { validateDto } from "../dto/validate.dto";
import { UserDto } from "../dto/account.dto";
import { GetAccountDto } from "../dto/getAccount.dto";

const routerUser = express.Router();
export default routerUser
    .post("/login", validateDto(GetAccountDto) as any, (req, res) => UserController.login(req, res))
    .post("/cadastro", validateDto(UserDto) as any,(req, res) =>{UserController.create(req, res)} );