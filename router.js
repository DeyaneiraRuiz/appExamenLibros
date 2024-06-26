const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM libros', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(__dirname+'/views/list.ejs', {results:results});
        }
    })
})

router.get('/create', (req, res) => {
    res.render(__dirname+'/views/create.ejs');
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);

module.exports = router;