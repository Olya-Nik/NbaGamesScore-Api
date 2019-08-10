let express = require('express')
let morgan = require('morgan')
let fetch = require('node-fetch')
let app = express()
const fs = require('fs');
const path = require('path');
const port = 3000;
const indexRouter = require('./routes/index');
const handlebars = require('express-handlebars');
const hbs = handlebars.create( {
	defaultLayout: 'layout',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir: path.join(__dirname, 'views'),
});
app.use(morgan('dev'))
app.use('/', indexRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs.engine );
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});