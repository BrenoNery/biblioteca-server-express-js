"use strict";
var Pessoa_1 = require("../modules/Pessoa");
var Autor_1 = require("../modules/Autor");
var Editora_1 = require("../modules/Editora");
var Livro_1 = require("../modules/Livro");
exports.pessoas = [
    new Pessoa_1.Pessoa(1, "Breno", "Nery", "(32) 9999-8888"),
    new Pessoa_1.Pessoa(2, "Antonio", "Ferreira", "(32) 9999-8888"),
    new Pessoa_1.Pessoa(3, "Maria", "Karlan", "(32) 9999-8888"),
    new Pessoa_1.Pessoa(4, "José", "Lourenço", "(32) 9999-8888"),
    new Pessoa_1.Pessoa(5, "Marcos", "Filho", "(32) 9999-8888")
];
exports.autores = [
    new Autor_1.Autor(1, "Carlos", "Drummond", "31/10/1902"),
    new Autor_1.Autor(2, "Mário", "Quintana", "30/07/1906"),
    new Autor_1.Autor(3, "Monteiro", "Lobato", "18/04/1882"),
    new Autor_1.Autor(4, "Stephen", "King", "21/09/1947"),
    new Autor_1.Autor(5, "J. R. R.", "Tolkien", "03/01/1892")
];
exports.livrosAltas = [
    new Livro_1.Livro(1, "A Rosa do Povo", new Autor_1.Autor(1, "Carlos", "Drummond", "31/10/1902"), "1945", new Editora_1.Editora(1, "Altas", "Rua Teste Amorim", null), "http://livroseresumos.com.br/wp-content/uploads/2014/05/a-rosa-do-povo.jpg"),
    new Livro_1.Livro(2, "O Senhor dos Anéis - A Sociedade do Anel", new Autor_1.Autor(5, "J. R. R.", "Tolkien", "03/01/1892"), "1954", new Editora_1.Editora(1, "Altas", "Rua Teste Amorim", null), "http://4.bp.blogspot.com/-BcaUYSO-ILU/US5Lxm1vocI/AAAAAAAAHBo/iDYYRnDHt0A/s1600/livro-o-senhor-dos-aneis-trilogia_MLB-F-217772296_5429.jpg"),
    new Livro_1.Livro(3, "O Iluminado", new Autor_1.Autor(4, "Stephen", "King", "21/09/1947"), "1977", new Editora_1.Editora(1, "Altas", "Rua Teste Amorim", null), "http://www.objetiva.com.br/arquivos/capas/9788581050485_300_grafica.jpg"),
    new Livro_1.Livro(4, "A Dança da Morte", new Autor_1.Autor(4, "Stephen", "King", "21/09/1947"), "1954", new Editora_1.Editora(1, "Altas", "Rua Teste Amorim", null), "http://bookeando.com/site/wp-content/uploads/2014/05/stephen-king-a-dança-da-morte.jpg")
];
exports.editoras = [
    new Editora_1.Editora(1, "Atlas", "Rua Teste Amorim", exports.livrosAltas)
];
//# sourceMappingURL=db.base.js.map