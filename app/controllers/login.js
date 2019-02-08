module.exports.Index = function(resposta){
    resposta.render('login/index', {validacao: false, usuario: {}, mensagem: false});
}

module.exports.Autenticar = function(aplicacao, requisicao, resposta){
    let errosValidacao = aplicacao.get('validationResult')(requisicao);
    let usuario = requisicao.body;

    if(!errosValidacao.isEmpty()){
        console.log(errosValidacao.array());
        resposta.render('login/index', {validacao: errosValidacao.array(), usuario: usuario, mensagem: false});
        return;
    }

    let conexao = aplicacao.config.DbConnection;
    let loginDAO = new aplicacao.app.models.LoginDAO(conexao);

    loginDAO.Autenticar(usuario, function(usuarioEncontrado){

        if(usuarioEncontrado){
            requisicao.session.autenticado = true;
            console.log(requisicao.session.autenticado);
            resposta.redirect('usuario/');
        }
        else
            resposta.render('login/index', {validacao: false, usuario: usuario, mensagem: 'Senha ou usuário incorretos'});
    });
}