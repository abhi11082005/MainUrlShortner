import User from "../models/user.schema.js"
//sessions uuid 
import { v4 as uuidv4 } from 'uuid';
//authorization
import { setUser } from "../service/auth.js";
async function handleUserRegister(req,res) {
    res.status(200).render("userRegister")
}
async function handleUserRegisterData (req,res){
    try{
        const data=req.body
        console.log("clicked")
        console.log(data)
        const user = await User.create(data);
        if(!user) throw error;
        console.log(user,"user is here bro");
        if(user){res.status(200)
        .json({data:`successfully data found ${user}`})}
    }
    catch{
        res.json({message:"error found"})
    }
}
async function handleUserLogin(req,res) {
    res.status(200).render("userLogin")
}

async function handleUserLoginAuth(req,res) {
    try{
        const {email,password}=req.body
        const mainData=await User.findOne({email,password})
        if(!mainData) return res.status(404).json({ message: "User not found", redirect: "/login" });
        const sessionId=uuidv4();
        const mappedValue=setUser(sessionId,mainData)
        const options={
            httpOnly:true,
            sameSite: 'none',
            secure:true,
            path: '/'
        }
        return res
        .status(200)
        .cookie('userLogin',sessionId,options)
        .json({data:'logged in successfully'})
        // .redirect("/url")
    }
    catch{
        res.json({message:"error found"})
    }
}

export {handleUserRegister,handleUserRegisterData, handleUserLogin , handleUserLoginAuth}