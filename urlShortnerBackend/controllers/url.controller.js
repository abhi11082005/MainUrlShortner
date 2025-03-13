import { stringify } from "uuid"
import URL from "../models/urlSchortnerSchema.model.js"
import { nanoid } from "nanoid"

async function handlleallurl(req,res) {
    try{
        // console.log("hetttt", req.user)
        const urlData=await URL.find({createdBy:req.user._id})
        
        console.log(urlData)
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


async function handleDeleteUrl(req, res) {
    try {
        const { _id } = req.params; // Extract `_id` from URL params
        console.log("Deleting URL with ID:", _id);

        if (!_id) {
            return res.status(400).json({ message: "URL ID is required" });
        }

        const deleteResult = await URL.deleteOne({ _id: _id });

        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({ message: "URL not found or already deleted" });
        }

        res.status(200).json({ message: "URL deleted successfully" });
    } catch (error) {
        console.error("Error deleting URL:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}




export {
    handleAddUrl,
    handlleallurl,
    handleRedirectUrl,
    handleAddGeturl,
    handleDeleteUrl

}