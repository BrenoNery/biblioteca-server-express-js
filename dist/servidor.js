"use strict";
var dbBase = require("./db/db.base");
var dao_pessoa_1 = require("./dao/dao.pessoa");
var dao_autor_1 = require("./dao/dao.autor");
var dao_livro_1 = require("./dao/dao.livro");
var dao_editora_1 = require("./dao/dao.editora");
var Autor_1 = require("./modules/Autor");
var express = require("express");
var daoPessoa = new dao_pessoa_1.DAOPessoa(dbBase.pessoas);
var daoAutor = new dao_autor_1.DAOAutor(dbBase.autores);
var daoLivro = new dao_livro_1.DAOLivro(dbBase.livrosAltas);
var daoEditora = new dao_editora_1.DAOEditora(dbBase.editoras);
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.use("/", express.static(__dirname + "./index.html"));
app.get("/pessoas", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoPessoa.consultarTodas());
});
app.get("/pessoa/:id", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoPessoa.consultarPorID(parseInt(req.params.id)));
});
app.get("/autores", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoAutor.consultarTodas());
});
app.get("/autor/:id", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoAutor.consultarPorID(parseInt(req.params.id)));
});
app.get("/editoras", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoEditora.consultarTodas());
});
app.get("/editora/:id", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoEditora.consultarPorID(parseInt(req.params.id)));
});
app.get("/livros", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoLivro.consultarTodas());
});
app.get("/livro/:id", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoLivro.consultarPorID(parseInt(req.params.id)));
});
app.get("/livro/:id/autor", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoLivro.consultarAutorLivro(parseInt(req.params.id)));
});
app.get("/livro/:id/editora", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(daoLivro.consultarEditoraLivro(parseInt(req.params.id)));
});
app.post("/autor", function (req, res) {
    console.log(req.body);
    daoAutor.alterar(new Autor_1.Autor(req.body.id, req.body.nome, req.body.sobrenome, null));
    console.log(daoAutor);
    res.send("Autor alterado com sucesso");
});
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
//# sourceMappingURL=servidor.js.map