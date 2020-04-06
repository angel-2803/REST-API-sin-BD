const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//moddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/movies'));

app.listen(app.get('port'), ()=> {
	console.log(`server on port ${app.get('port')}`);
});