import express, { urlencoded }  from "express"
const app=express()
import cors from "cors"
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true, // Allow cookies
}))
//ejs setup
import path from "path"
app.set("view engine",'ejs')
app.set("views",path.resolve("./views"))
//connection of db
import connectdb from "./db/connectdb.js"
//sessions uuid 
import { v4 as uuidv4 } from 'uuid';
// const { createServer } = require('@vercel/node');
import dotenv from "dotenv"
dotenv.config({
    path:'./.env'
})
//cookies parser

import cookieParser from "cookie-parser"
import URL from "./models/urlSchortnerSchema.model.js"
import userRouter from "./router/user.router.js"
import urlrouter from "./router/url.router.js"
import authMiddleware from "./middlewares/auth.middleware.js"
//Middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectdb()
.then(result=> console.log("Database connected succesfully",))
.catch(err=> console.log("NOt connected : "))

app.get('/',async(req,res)=>{
    const allUrl=await URL.find({})
    res.status(200).render("home",{urls:allUrl})
})
app.use("/user",userRouter)
app.use("/url",urlrouter)

app.listen(5000,()=>{
    console.log("successfully connected")
})