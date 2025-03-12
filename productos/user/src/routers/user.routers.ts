import { Router } from "express";
import { getAllusuario } from "../controllers/user.controller";
const ruta = Router()

ruta.get("/all",getAllusuario)

export default ruta;