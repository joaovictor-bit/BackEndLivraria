import {
    CriarFavorito,
    ListarFavorito,
    DeletarFavorito
} from "../controllers/favoritos.controller.js";

import express from "express"

const router = express.Router()

router.post("/", CriarFavorito)
router.get("/", ListarFavorito)
router.delete("/:id", DeletarFavorito)
export default router
