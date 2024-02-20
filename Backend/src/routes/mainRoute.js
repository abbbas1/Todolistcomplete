import { Router } from "express";
import UserRouter from "./routes/UserRoute.js";
import TodoListRouter from "./routes/ListRouter.js";

const MainRoute = Router()

MainRoute.use("/user",UserRouter)
MainRoute.use("/task",TodoListRouter)

export default MainRoute;