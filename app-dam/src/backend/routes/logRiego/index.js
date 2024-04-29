const express = require('express')
const pool = require('../../mysql-connector')

const routerLogRiego = express.Router()

//Metodo GET para consultar todos los disspositivos en la BD.
routerLogRiego.get('/:id', function (req, res) {
    pool.query('Select * from `Log_Riegos` Where electrovalvulaId='+req.params.id, function(err, result, fields) {
        if (err) {
            res.send(err).status(400); // Envío de código de error en caso que aplique.
            return;
        }
        res.send(result); // Envío del resultado de la consulta.
    });
})

module.exports = routerLogRiego