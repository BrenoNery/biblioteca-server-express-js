import * as dbBase from "./db/db.base";
import { DAOPessoa } from "./dao/dao.pessoa";
import { DAOAutor } from "./dao/dao.autor";
import { DAOLivro } from "./dao/dao.livro";
import { DAOEditora } from "./dao/dao.editora";
import { Autor } from "./modules/Autor";
import * as express from "express";

const daoPessoa = new DAOPessoa(dbBase.pessoas);
const daoAutor = new DAOAutor(dbBase.autores);
const daoLivro = new DAOLivro(dbBase.livrosAltas);
const daoEditora = new DAOEditora(dbBase.editoras);

let path = require("path");
let bodyParser = require("body-parser");
let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/", express.static(__dirname + "./index.html"));

app.get("/pessoas", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoPessoa.consultarTodas());
});

app.get("/pessoa/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoPessoa.consultarPorID(parseInt(req.params.id)));
});

app.get("/autores", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoAutor.consultarTodas());
});

app.get("/autor/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoAutor.consultarPorID(parseInt(req.params.id)));
});

app.get("/editoras", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoEditora.consultarTodas());
});

app.get("/editora/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoEditora.consultarPorID(parseInt(req.params.id)));
});

app.get("/livros", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoLivro.consultarTodas());
});

app.get("/livro/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoLivro.consultarPorID(parseInt(req.params.id)));
});

app.get("/livro/:id/autor", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoLivro.consultarAutorLivro(parseInt(req.params.id)));
});

app.get("/livro/:id/editora", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoLivro.consultarEditoraLivro(parseInt(req.params.id)));
});

app.post("/autor", function(req, res) {
    console.log(req.body);

    daoAutor.alterar(
        new Autor(
            req.body.id,
            req.body.nome,
            req.body.sobrenome,
            null
        )
    );

    console.log(daoAutor);
    res.send("Autor alterado com sucesso");
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});