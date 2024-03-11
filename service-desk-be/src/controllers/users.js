import UserModel from "../models/UserModel.js"
import Auth from '../common/Auth.js'
const getAllUsers = async(req,res)=>{
    try {
        let users = await UserModel.find({},{password:0})
        res.status(200).send({
            message:"Data Fetch Successful",
            users
        })
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Internal Server Error'  
        })
    }
}

const create = async(req,res)=>{
    try {
        let {name,email,password} = req.body
        let user = await UserModel.findOne({email:email})

        if(!user)
        {
            password = await Auth.hashPassword(password)
            await UserModel.create({name,email,password})

            res.status(200).send({
                message:"User Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`User with ${email} already exists`
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Internal Server Error'  
        })
    }
}

export default {
    create,
    getAllUsers
}