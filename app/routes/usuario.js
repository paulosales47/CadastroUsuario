module.exports = function(aplicacao){
    aplicacao.get('/usuario', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.index(resposta);
    });

    aplicacao.get('/novo', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.novo(aplicacao, resposta);
    });

    aplicacao.get('/alterar', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.alterar(aplicacao, requisicao, resposta);
    });

    aplicacao.get('/detalhe', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.detalhe(aplicacao, requisicao, resposta);
    });

    aplicacao.post('/salvarNovo', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.salvarNovo(aplicacao, requisicao, resposta);
    });

    aplicacao.post('/salvarAlteracao', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.salvarAlteracao(aplicacao, requisicao, resposta);
    });

}