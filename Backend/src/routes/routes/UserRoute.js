import { Router } from "express";
import UserController from "../../controller/UserController.js";

const UserRouter = Router()

UserRouter.post("/register",UserController.userRegister)
UserRouter.post("/login",UserController.userLogin)

export default UserRouter;