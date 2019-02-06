module.exports.index = function(aplicacao, resposta){
    
    let conexao = aplicacao.config.DbConnection;
    let usuarioDAO = new aplicacao.app.models.UsuarioDAO(conexao);

    usuarioDAO.BuscarTodosUsuarios(function(usuarios){
        resposta.render('usuario', {usuarios: usuarios});
    });
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

module.exports.cadastrarUsuario = function(aplicacao, requisicao, resposta){

    let formulario = requisicao.body;
    let conexao = aplicacao.config.DbConnection;
    let usuarioDAO = new aplicacao.app.models.UsuarioDAO(conexao);

    usuarioDAO.CadastrarUsuario(formulario);
    resposta.redirect('/usuario');
}

module.exports.atualizarUsuario = function(aplicacao, requisicao, resposta){
    resposta.render('/usuario');
}

