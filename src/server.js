// ============================
//  Dependências
// ============================
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usuarioRoutes from "./routes/usuarios.routes.js"
import livrosRoutes from "./routes/livros.routes.js"
import avaliacoesRoutes from "./routes/avaliacoes.routes.js"
import favoritosRoutes from "./routes/favoritos.routes.js"
import reservasRoutes from "./routes/reservas.routes.js"
// ============================
//  Configuração do servidor
// ============================
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/",(req,res)=>{
  res.send("API funcionando")
});

app.use("/usuarios",usuarioRoutes);
app.use("/livros",livrosRoutes);
app.use("/avaliacoes",avaliacoesRoutes);
app.use("/favoritos",favoritosRoutes);
app.use("/reservas",reservasRoutes)

// ============================
//  Inicia o servidor
// ============================
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
