import {
    criarAvaliacao,
    listarAvaliacao,
    buscarAvaliacao,
    atualizarAvaliacao,
    excluirAvaliacao
} from "../controllers/avaliacoes.controller.js";

import express from "express";

const router = express.Router();

router.post("/", criarAvaliacao);
router.get("/", listarAvaliacao);
router.get("/:id", buscarAvaliacao);
router.put("/:id", atualizarAvaliacao);
router.delete("/:id", excluirAvaliacao);

export default router;