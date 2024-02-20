import { compare, hash } from "bcrypt";
import UserModel from "../models/User.js";

const UserController = {
  userRegister: async (req, res) => {
    try {
      const { userEmail, Password } = req.body;
      const hPassword = await hash(Password, 10)
      await UserModel.create({
        userEmail,
        Password:hPassword,
      });
      res.status(400).json({message:"User Registered successfully."})
    } catch (err) {
        res.status(404).json({message:"Something bad happened in user registeration."+err})
    }
  },
  userLogin:async(req,res)=>{
    try {
        const{userEmail,Password}=req.body
        const User = await UserModel.findOne({
            where:{
                userEmail
            }
        })
        if(!User){
            res.json({message:"Invalid Email."})
        }
        const ComparePassword = await compare(Password , User.Password)
        if(!ComparePassword){
            res.json({message:"Invalid Password"})
        }
        res.json({message:"User Loged in Successsfully."})
    } catch (error) {
        res.status(404).json({message:"Something bad happened in Log in."})
    }
  }
};

export default UserController;
