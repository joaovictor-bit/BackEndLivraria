import { db } from "../config/db.js"

export async function CriarFavorito(req, res) {
    try {
        const {data_favoritado } = req.body
        if (!data_favoritado)
            return res.status(400).json({ erro: "Campos Obrigatórios" })

        await db.execute(
            "INSERT INTO favoritos (data_favoritado) VALUES (?)",
            [data_favoritado]
        )
        res.status(200).json({ msg: "Criado com sucesso" })
    } catch (err) {
        res.status(500).json({ erro: err.message })
    }
};


export async function ListarFavorito(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM favoritos")
        res.json(rows)
    } catch (err) {
        res.status(500).json({ erro: err.message })
    }
};


export async function DeletarFavorito(req, res) {
    try {
        await db.execute("DELETE FROM favoritos WHERE id = ?", [req.params.id]);
        res.status(200).json({ msg: "Item deletado com sucesso" })
    } catch (err) {
        res.status(500).json({ erro: err.message })
    }
}