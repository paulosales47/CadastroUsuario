let mongoDB = require('mongodb');
var _db;

module.exports = {
    Connect: function(callback){
        return mongoDB.MongoClient.connect('mongodb://localhost:27017/estudo', (erro, db) => {
            _db = db;
            return callback(erro);
        });
    },

    GetDB: function(){
        return _db;
    }

};
