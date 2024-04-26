const express = require('express')
const pool = require('../../mysql-connector')

const routerMedicion = express.Router()

//Metodo GET para consultar todos las mediciones en la BD. Luego tendré que filtrar por tipo de dispositivo para hacer la tabla.
routerMedicion.get('/', function (req, res) {
    pool.query('Select * from Mediciones', function(err, result, fields) {
        if (err) {
            res.send(err).status(400); // Envío de código de error en caso que aplique.
            return;
        }
        res.send(result); // Envío del resultado de la consulta.
    });
})

module.exports = routerMedicion