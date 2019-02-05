let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use("/jquery",express.static('./node_modules/jquery'));
app.use("/popper", express.static('./node_modules/popper'));
app.use("/bootstrap",express.static('./node_modules/bootstrap'));
app.use('/public', express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;