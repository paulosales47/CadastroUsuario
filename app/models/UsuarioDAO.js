let MongoDB = require('mongodb')

class UsuarioDAO{

    constructor(conexao){
        this._conexao = conexao;
    }

    CadastrarUsuario(usuario){
        MongoDB.MongoClient.connect(this._conexao.stringConexao, {useNewUrlParser: true})
        .then(client => {
            client.db()
            .collection('usuarios')
            .insertOne(usuario);
            client.close();
        })
        .catch(err => console.log(err));
    }

    BuscarTodosUsuarios(callback){
        MongoDB.MongoClient.connect(this._conexao.stringConexao, {useNewUrlParser: true})
        .then(client => {
            client.db()
            .collection('usuarios')
            .find({})
            .toArray(function(erro, usuarios){
                client.close();
                callback(usuarios);
            });
        })
        .catch(err => console.log(err));
    }

    BuscarUsuario(id_usuario, callback){
        
        MongoDB.MongoClient.connect(this._conexao.stringConexao, {useNewUrlParser: true})
        .then(client => {
            client.db()
            .collection('usuarios')
            .find({_id: new MongoDB.ObjectID(id_usuario)})
            .toArray(function(erro, usuario){
                client.close();
                callback(usuario);
            });
        })
        .catch(err => console.log(err));
    }

    ExcluirUsuario(id_usuario){

        MongoDB.MongoClient.connect(this._conexao.stringConexao, {useNewUrlParser: true})
        .then(client => {
            client.db()
            .collection('usuarios')
            .deleteOne({_id: new MongoDB.ObjectID(id_usuario)});
            client.close();
        })
        .catch(err => console.log(err));
    }
}

module.exports = function(){
    return UsuarioDAO;
}