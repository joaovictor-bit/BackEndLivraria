import {db} from "../config/db.js"

export async function CriarReservas(req,res){
    try{
        const{data_retirada, data_devolucao, confirmado_email} = req.body
        if (! data_retirada || !data_devolucao|| !confirmado_email)
            return res.status(400).json({msg: "Campos Obrigatórios"})

        await db.execute(
            "INSERT INTO reservas (data_retirada, data_devolucao, confirmado_email, criado_em) VALUES (?,?,?,?)",
            [data_retirada, data_devolucao, confirmado_email]
        )
        res.status(200).json({msg: "Criado com sucesso"})
    } catch (err){
        res.status(500).json({erro: err.message})
    }
};

export async function ListarReservas(req,res){
    try{
        const[rows] = await db.execute ("SELECT * FROM reservas")
        res.json(rows)
    } catch (err){
        res.status(500).json({err: err.message})

    }
};

export async function DeletarReservas(req,res){
    try{
        await db.execute("DELETE FROM reservas WHERE id = ?", [req.params.id])
        res.status(200).json({msg: "Campo eliminado com sucesso"})
    } catch (err){
        res.status(500).json({msg: err.message})
    }
};



export async function ListarReservasAtivas(req, res) {
    try {
        const hoje = new Date().toISOString().split("T")[0];

        const [rows] = await db.execute(
            "SELECT * FROM reservas WHERE data_devolucao >= ?",
            [hoje]
        );

        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};
