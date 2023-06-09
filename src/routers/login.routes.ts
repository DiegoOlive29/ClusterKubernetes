import { Router } from "express";
import { createLoginController } from "../controllers/loginUser.controllers";

const   sessionRoutes = Router()
sessionRoutes.post('',createLoginController)

export default sessionRoutes