import UserModel from "../models/User.js";
import TodoListModel from "../models/Todolist.js";

const initDb = async()=>{
    await UserModel.sync({
        alter:true,
        force:false
    })
    await TodoListModel.sync({
        alter:true,
        force:false
    })
}

export default initDb;