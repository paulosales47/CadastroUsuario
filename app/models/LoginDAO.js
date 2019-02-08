let MongoDB = require('mongodb');

class LoginDAO{
    constructor(conexao){
        this._conexao = conexao;
    }

    Autenticar(usuario, callback){

        MongoDB.connect(this._conexao.stringConexao, {useNewUrlParser: true})
        .then((client) => {
            client.db()
            .collection('usuarios')
            .find(usuario)
            .toArray(function(erro, usuarioPesquisa){
                client.close();
                callback(usuarioPesquisa.length > 0);
            })
        })
        .catch( (erro) => console.log(erro) )
    }
}

module.exports = function(){
    return LoginDAO;
}