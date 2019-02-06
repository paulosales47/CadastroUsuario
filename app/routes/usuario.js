module.exports = function(aplicacao){
    aplicacao.get('/usuario', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.index(aplicacao, resposta);
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

    aplicacao.post('/cadastrarUsuario', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.cadastrarUsuario(aplicacao, requisicao, resposta);
    });

    aplicacao.post('/atualizarUsuario', function(requisicao, resposta){
        aplicacao.app.controllers.usuario.atualizarUsuario(aplicacao, requisicao, resposta);
    });

}