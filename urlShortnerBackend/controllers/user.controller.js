import User from "../models/user.schema.js"
import puppeteer from "puppeteer"
//sessions uuid 
import { v4 as uuidv4 } from 'uuid';
//authorization
import { setUser } from "../service/auth.js";


async function handleUserRegister(req,res) {
    res.status(200).render("userRegister")
}
// Function to check if the email exists on Google
const checkEmailExists = async (email) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto("https://accounts.google.com/signin/recovery", { waitUntil: "networkidle2" });
        await page.type("input[type='email']", email);
        await page.keyboard.press("Enter");

        await new Promise(resolve => setTimeout(resolve, 3000));


        const errorExists = await page.evaluate(() => {
            return document.body.innerText.includes("Couldn’t find your Google Account");
        });

        await browser.close();
        return !errorExists; // Returns `true` if email exists, `false` otherwise
    } catch (error) {
        await browser.close();
        console.error("Error verifying email:", error);
        return null; // Return `null` if verification fails
    }
};
async function handleUserRegisterData (req,res){
    try{
        const data=req.body
        console.log("clicked")
        console.log(data)
        const email=data.email
        // ✅ Check if the email exists on Google
        const emailExists = await checkEmailExists(email);
        if (emailExists === false) {
            return res.status(400).json({ exists: false, message: "Email does not exist on Google." });
        } else if (emailExists === null) {
            return res.status(500).json({ error: "Google email verification failed." });
        }
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




// Secure Login Handler
const handleUserLoginAuth = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ Check if the email exists on Google
        const emailExists = await checkEmailExists(email);
        if (emailExists === false) {
            return res.status(400).json({ exists: false, message: "Email does not exist on Google." });
        } else if (emailExists === null) {
            return res.status(500).json({ error: "Google email verification failed." });
        }

        // ✅ Find user in the database
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