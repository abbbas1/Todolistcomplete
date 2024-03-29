import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";
import TodoListModel from "./Todolist.js";

const UserModel  = sequelize.define("user",{
    userEmail:{
        type:DataTypes.STRING,
        allownull:false
    },
    Password:{
        type:DataTypes.STRING,
        allownull:false
    }
})

UserModel.hasMany(TodoListModel)
TodoListModel.belongsTo(UserModel)

export default UserModel; 