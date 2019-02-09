let secret = ',3[zcuY%ZlZmbO;MN{U5GIUN(]AJ}hQ*CJhe45K^IjhkzWx#N)jT}5i@zi+s*Db)';
let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let {check, validationResult} = require('express-validator/check');
let expressSession = require('express-session');
let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.set('check', check);
app.set('validationResult', validationResult);

app.use("/jquery",express.static('./node_modules/jquery'));
app.use("/popper", express.static('./node_modules/popper.js'));
app.use("/bootstrap/css",express.static('./node_modules/bootstrap/dist/css'));
app.use("/bootstrap/js",express.static('./node_modules/bootstrap/dist/js'));
app.use("/icons", express.static('./node_modules/material-design-icons'))
app.use('/public', express.static('./app/public'));
app.use(expressSession({ secret: secret, cookie: { maxAge: 1200000}, resave: false, saveUninitialized: false}));
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('./config/DbConnection.js')
    .then('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;