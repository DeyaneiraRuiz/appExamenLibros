const conexion = require('../database/db');

exports.save = (req, res) => {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    conexion.query('INSERT INTO libros SET?', {titulo:titulo, autor:autor}, (error, results) =>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/')
        }
    })
}