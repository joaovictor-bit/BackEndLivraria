import {
    criarUsuarios,
    listaUsuario,
    obterUsuario,
    alterarUsuario,
    deletaUsuario
} from "../controllers/usuarios.controller.js";

import express from "express";

const router = express.Router();

router.post("/", criarUsuarios);
router.get("/", listaUsuario);
router.get("/:id", obterUsuario);
router.put("/:id", alterarUsuario);
router.delete("/:id", deletaUsuario);

export default router;
