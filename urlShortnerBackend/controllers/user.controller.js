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

const handleUserLoginAuth = async (req, res) => {
    try {
        const { email, password } = req.body;
        const mainData = await User.findOne({ email, password });

        if (!mainData) {
            return res.status(404).json({ message: "User not found" });
        }

        const sessionId = uuidv4(); // Generate session ID
        const mappedValue=setUser(sessionId,mainData)
        return res.status(200).json({ message: "Logged in successfully", sessionId });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export {handleUserRegister,handleUserRegisterData, handleUserLogin , handleUserLoginAuth}