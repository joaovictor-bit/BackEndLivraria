import {
    listarLivro,
    criarLivro,
    buscarLivro,
    atualizarLivro,
    excluirLivro,
    ListarAvaliacoesLivros
} from "../controllers/livros.controller.js";

import express from "express";

const router = express.Router();

router.get("/", listarLivro);
router.post("/", criarLivro);
router.get("/:id", buscarLivro);
router.put("/:id", atualizarLivro);
router.delete("/:id", excluirLivro);
router.get("/avaliacoes/:id",ListarAvaliacoesLivros)

export default router;
