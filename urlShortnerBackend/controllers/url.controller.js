import { stringify } from "uuid"
import URL from "../models/urlSchortnerSchema.model.js"
import { nanoid } from "nanoid"

async function handlleallurl(req,res) {
    try{
        console.log(req.user)
        const urlData=await URL.find({createdBy:req.user._id})
        res.status(200)
        .json({urls:urlData})
    }
    catch{
        res.json({message:"error found in handleallurl"})
    }
}
async function handleAddGeturl(req,res){
    res.status(200).render("urlSortner")
}
async function handleAddUrl(req,res){
    try{
        const data=req.body
        console.log(data)
        data.shortner=nanoid(10)
        data.count=0
        data.createdBy=req.user._id;
        console.log(req.user._id)
        const datainsert=await URL.create(data)
        if(!datainsert) console.log("here is error")
        res.status(200)
        .json({data:datainsert})
    }
    catch{
        console.log("data not received")
        res.json({message:"error found in handleAddUrl"})
    }
}
async function handleRedirectUrl(req,res){
    try{
        const shortnerFromUrl=req.params.redirect
        const data=await URL.findOne({'shortner':shortnerFromUrl})
        const countClick=data.count+1
        await URL.updateOne({'shortner':shortnerFromUrl},{"count":countClick})
        
        if(data.url[0]==="h") res.status(200).redirect(`${data.url}`)
        res.status(200).redirect(`http://${data.url}`)
    }
    catch{
        res.json({message:"error found in handleRedirectUrl"})
    }
}

export {
    handleAddUrl,
    handlleallurl,
    handleRedirectUrl,
    handleAddGeturl,

}