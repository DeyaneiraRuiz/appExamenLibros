const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})

conexion.connect((error) => {
    if (error) {
        console.log('Error de conexion: ' + error);
        
    } else {
        console.log('Conexion establecida');
    }
})

module.exports = conexion;