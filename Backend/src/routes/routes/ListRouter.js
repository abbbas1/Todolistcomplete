import { Router } from "express";
import TodoListController from "../../controller/ListController.js";

const TodoListRouter = Router()

TodoListRouter.post("/create",TodoListController.taskCreation)
TodoListRouter.put("/update/:id",TodoListController.updateTask)
TodoListRouter.delete("/delete/:id",TodoListController.updateTask)
TodoListRouter.get("/getAllTasks",TodoListController.updateTask)


export default TodoListRouter;