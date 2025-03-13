import express from "express"
import {Router} from "express";
const router=Router()
import { handleAddUrl ,handlleallurl, handleRedirectUrl, handleAddGeturl ,handleDeleteUrl} from "../controllers/url.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

router.route('/').get(authMiddleware , handlleallurl).delete(authMiddleware,handleDeleteUrl)
router.route('/add').post(authMiddleware,handleAddUrl)
router.route('/:redirect').get(handleRedirectUrl)

export default router