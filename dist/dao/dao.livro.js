"use strict";
var DAOLivro = (function () {
    function DAOLivro(livros) {
        this.livros = livros;
    }
    DAOLivro.prototype.incluir = function (livro) {
        this.livros.push(livro);
    };
    DAOLivro.prototype.alterar = function (livro) {
        var res = this.livros.find(function (el) {
            return livro._titulo === el._titulo;
        });
        res._titulo = livro._titulo;
    };
    DAOLivro.prototype.consultarPorID = function (id) {
        return this.livros.find(function (item) { return item._id === id; });
    };
    DAOLivro.prototype.consultarAutorLivro = function (idLivro) {
        var livro = this.consultarPorID(idLivro);
        return livro._autor;
    };
    DAOLivro.prototype.consultarEditoraLivro = function (idLivro) {
        var livro = this.consultarPorID(idLivro);
        return livro._editora;
    };
    DAOLivro.prototype.consultarTodas = function () {
        return this.livros;
    };
    DAOLivro.prototype.excluir = function () {
        this.livros.pop();
    };
    return DAOLivro;
}());
exports.DAOLivro = DAOLivro;
//# sourceMappingURL=dao.livro.js.map