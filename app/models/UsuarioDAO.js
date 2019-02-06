let MongoClient = require('mongodb').MongoClient

class UsuarioDAO{

    constructor(conexao){
        this._conexao = conexao;
    }

    CadastrarUsuario(usuario)
    {
        MongoClient.connect(this._conexao.stringConexao, {useNewUrlParser: true})
        .then(client => client.db().collection('usuarios').insertOne(usuario))
        .catch(err => console.log(err));
    }

    BuscarTodosUsuarios(callback){
        
        MongoClient.connect(this._conexao.stringConexao, {useNewUrlParser: true})
        .then(client => {
            usuarios = client.db()
            .collection('usuarios')
            .find({})
            .toArray(function(erro, usuarios){
                callback(usuarios);
            });
        })
        .catch(err => console.log(err));
    }
}

module.exports = function(){
    return UsuarioDAO;
}