import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const TodoListModel = sequelize.define("todolist",{
    taskTittle:{
        type:DataTypes.STRING,
        allownull:false
    },
    taskDetail:{
        type:DataTypes.STRING,
        allownull:false
    }
})

export default TodoListModel;