let mongoDB = require('mongodb');

let connMongoDB = function(){
    let db = new mongoDB.Db(
        'usuarios'
        ,new mongoDB.Server(
            'localhost'
            ,27017
            ,{}
        )
        ,{}
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}