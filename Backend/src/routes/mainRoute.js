import { Router } from "express";
import UserRouter from "./routes/UserRoute.js";

const MainRoute = Router()

MainRoute.use("/user",UserRouter)

export default MainRoute;