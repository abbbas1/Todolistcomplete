import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const TodoListModel = sequelize.define("todolist",{
    task:{
        type:DataTypes.STRING,
        allownull:false
    }
})

export default TodoListModel