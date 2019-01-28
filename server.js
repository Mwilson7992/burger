var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var models = require('./models');
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(methodOverride('_method'));

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT);


