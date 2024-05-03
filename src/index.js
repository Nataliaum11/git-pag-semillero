const express = require('express');
const morgan = require('morgan');

//inicializacion 
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//seting
app.set('port', process.env.PORT || 4000);

//starting the server
app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'));
});

//Rutas
app.use('/autenticacion', require('./routes/autenticacion'));
app.use('/comentario', require('./routes/comentario'));
app.use('/noticia', require('./routes/noticia'));

