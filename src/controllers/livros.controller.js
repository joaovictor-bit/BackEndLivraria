import {db} from "../config/db.js"

export async function criarLivro(req, res) {
    try {
        const { titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse } = req.body;
        if (!titulo|| !autor || !genero || !editora|| !ano_publicacao|| !isbn|| !idioma|| !formato|| !caminho_capa || !sinopse )
            return res.status(400).json({ erro: "Campos obrigatórios" });

        await db.execute(
            "INSERT INTO livros (titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse]
        );

        res.json({ mensagem: "Livro criado com sucesso!"});
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function listarLivro(req, res) {
    try {
        const [rows] = await db.execute(` SELECT * FROM LIVROS`);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export async function buscarLivro(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM livros WHERE id = ?", [
            req.params.id,
        ]);
        if (rows.length === 0)
            return res.status(404).json({ erro: "Livro não encontrado" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export async function atualizarLivro(req, res) {
    try {
        const { titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse } = req.body;
        await db.execute(
            "UPDATE livros SET titulo = ?, autor = ?, genero = ?, editora = ?, ano_publicacao = ?, isbn = ?, idioma = ?, formato = ?, caminho_capa = ?, sinopse = ?",
            [titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse, req.params.id]
        );
        res.json({ mensagem: "Usuário atualizado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function excluirLivro(req, res) {
    try {
        await db.execute("DELETE FROM livros WHERE id = ?", [req.params.id]);
        res.json({ mensagem: "livros deletado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export async function ListarAvaliacoesLivros(req,res){
    try{
        const [rows] = await db.execute(` SELECT 
                l.titulo AS livro,
                a.nota,
                (
                    SELECT COUNT(*) 
                    FROM avaliacoes a2 
                    WHERE a2.livro_id = l.id
                ) AS total_avaliacoes
            FROM avaliacoes a
            INNER JOIN livros l ON a.livro_id = l.id`)
            res.json(rows)
    }catch (err){
        return res.status(500).json({msg: "erro ao buscar avaliações de livros"})

    }
}