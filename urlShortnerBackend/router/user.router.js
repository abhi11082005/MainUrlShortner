import { Router } from "express";
import { handleUserRegisterData, handleUserLoginAuth,handleUserLogin } from "../controllers/user.controller.js";
const router=Router()
router.route('/register').post(handleUserRegisterData)
router.route('/login').post(handleUserLoginAuth)
export default router


