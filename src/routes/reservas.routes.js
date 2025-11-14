import {
    CriarReservas,
    ListarReservas,
    DeletarReservas,
    ListarReservasAtivas
} from "../controllers/reservas.controller.js";

import express from "express"

const router = express.Router()


router.post("/", CriarReservas)
router.get("/", ListarReservas)
router.delete("/:id", DeletarReservas)
router.get("/ativas",ListarReservasAtivas)

export default router
