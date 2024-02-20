import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

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

export default UserModel;