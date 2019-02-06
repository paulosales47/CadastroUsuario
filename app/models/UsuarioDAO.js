let mongoDB = require('mongodb');

class UsuarioDAO{

    constructor(conexao){
        this._conexao = conexao;
    }

    CadastrarUsuario(usuario){

        this._conexao.Connect((erro) => {

            let db = this._conexao.GetDB();

            db.collection('usuarios').insert(usuario);
        });
    }

}

module.exports = function(){
    return UsuarioDAO;
}