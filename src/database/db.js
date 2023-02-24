const mysql = require('mysql');

// creo la conexion con la base de datos
// con los datos que declaro en el .env
const conexionDB = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASS,
     database: process.env.DB_DATABASE,
    })

// ahora para ver si da error de conexion 
conexionDB.connect((error) => {
    if (error) {
        console.log('Error de conexion nro: '+error);
        return;
    }
    console.log('Esta conectado a la base de datos MySQL con exito!!!');
})

// para utiliza lo debemos exportar
module.exports = conexionDB;

