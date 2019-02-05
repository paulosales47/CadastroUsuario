module.exports.index = function(resposta){
    resposta.render('usuario/index');
}

module.exports.novo = function(aplicacao, resposta){
    resposta.render('usuario/novo');
}

module.exports.alterar = function(aplicacao, requisicao, resposta){
    resposta.render('usuario/alterar');
}

module.exports.detalhes = function(aplicacao, requisicao, resposta){
    resposta.render('usuario/detalhe');
}

module.exports.salvarNovo = function(aplicacao, requisicao, resposta){
    resposta.render('usuario/index');
}

module.exports.salvarAlteracao = function(aplicacao, requisicao, resposta){
    resposta.render('usuario/index');
}

