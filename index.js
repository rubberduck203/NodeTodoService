var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.set('view engine', 'hbs');

var root = require('./controllers/root'),
    todo = require('./controllers/todo');    

app.get('/', root.index);
app.get('/todo', todo.findAll);
app.get('/todo/:id', todo.findById);

// Order is important here, the error handler needs to be after all the routes for it to fire correctly.
var errorHandler = require('./middleware/errorHandler');
app.use(errorHandler.handle);

app.listen(1337,
    function () {
        console.log('Web api is listening on port 1337');
    });

