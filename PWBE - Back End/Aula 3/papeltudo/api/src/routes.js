//Dependências - Frameworks
const express = require("express");
const routes = express.Router();

const papelaria = require("./controllers/clientes");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API papelaria respondendo!");
}

//Rotas de Saída - Clientes
routes.get("/", teste);
routes.post("/papelaria", papelaria.create);
routes.get("/papelaria", papelaria.read);
routes.put("/papelaria/:id", papelaria.update);
routes.delete("/papelaria/:id", papelaria.del);

module.exports = routes;