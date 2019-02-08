module.exports.Index = function(resposta){
    resposta.render('login/index', {validacao: false, usuario: {}});
}

module.exports.Autenticar = function(aplicacao, requisicao, resposta){
    let errosValidacao = aplicacao.get('validationResult')(requisicao);
    let usuario = requisicao.body;

    if(!errosValidacao.isEmpty()){
        console.log(errosValidacao.array());
        resposta.render('login/index', {validacao: errosValidacao.array(), usuario: usuario});
        return;
    }

    resposta.send('AUTENTICADO');
}