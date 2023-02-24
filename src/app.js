// setear las variables de entorno (env)
require('dotenv').config();
// const {urlencoded, json} = require('express');

// convocamos los modulos a utilizar
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');
const port = process.env.PUERTO || 3000;

// Setear el motor de plantillas (ejs)
app.set('views', path.join(__dirname + '/views'));
// console.log(__dirname + '/views');

app.set('view engine', 'ejs');

// configurar el directorio public o estaticos usando la funcion de middlewares 
// que tiene express express.static(__dirname, 'directorio)
app.use('/recursos',express.static(path.join(__dirname + '/public')));
// console.log(__dirname + '/public');

// requerimos los enrutadores donde estan 
const homeRoute = require('./routes/home.Route');
const cartRoute = require('./routes/cart.Route');
const productDetailRoute = require('./routes/productDetail.Route');
const loginRoute = require('./routes/login.Route');


// llamar al enrutador o router
// tambien podria hacerlo asi
// app.use('/', require('./routes/router) y no declarar la variable routes arriba, pero queda mas legible el codigo
app.use('/', homeRoute);
app.use('/', cartRoute);
app.use('/:id', productDetailRoute);
app.use('/', loginRoute);


// configurar node para formularios, datos, login hay que setearlo y al JSON para devolver al cliente lo que viene de la base:
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// setear las cookies
// app.use(cookieParser);


// pongo en funcionamiento el servidor
app.listen(port,(err) =>{
    if(err){
        console.log(`Error en el Servidor : ${err}`)
    } else {
        console.log(`Servidor escuchando en puerto: ${port}`)
    }
});
