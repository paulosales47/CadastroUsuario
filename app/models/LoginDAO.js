let MongoDB = require('mongodb');
const {SHA3} = require('sha3');

class LoginDAO{
    constructor(conexao){
        this._conexao = conexao;
    }

    Autenticar(usuario, callback){

        let hash = new SHA3(512);
        hash.update(usuario.senha.concat(this._conexao.salt));

        let usuarioHash = {
             nomeUsuario: usuario.nomeUsuario
            ,senha: hash.digest('hex')
        }

        MongoDB.connect(this._conexao.stringConexao, {useNewUrlParser: true})
        .then((client) => {
            client.db()
            .collection('usuarios')
            .find(usuarioHash)
            .toArray(function(erro, usuarioPesquisa){
                client.close();
                callback(usuarioPesquisa);
            })
        })
        .catch( (erro) => console.log(erro) )
    }
}

module.exports = function(){
    return LoginDAO;
}