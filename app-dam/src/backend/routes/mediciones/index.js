const express = require('express')
const pool = require('../../mysql-connector')

const routerMedicion = express.Router()

//Metodo GET para consultar todos las mediciones en la BD. Luego tendré que filtrar por tipo de dispositivo para hacer la tabla.
routerMedicion.get('/:id', function (req, res) {
    // console.log("llegó al backend el id: "+req.params.id)
    pool.query('Select * from Mediciones Where dispositivoId='+req.params.id, function(err, result, fields) {
        if (err) {
            res.send(err).status(400); // Envío de código de error en caso que aplique.
            return;
        }
        res.send(result); // Envío del resultado de la consulta.
    });
})

routerMedicion.post('/:id/:valor', function (req, res) {
    console.log("Post en dispositivo #"+req.params.id)
    dispositivoId = req.params.id
    console.log("Post con valor: "+req.params.valor)
    valor = req.params.valor
    // console.log("llegó al backend el body: "+req.params.body) 
    // console.log("llegó al backend el body: "+req.params.valor) 
    // console.log("llegó al backend el body (parseado): "+JSON.parse(req.params.body))
    //medicion = req.params.body
    

    pool.query('INSERT INTO `Mediciones` (`fecha`, `valor`, `dispositivoId`) VALUES (current_timestamp(), '+valor+', '+dispositivoId+')', function(err, result, fields) {
         if (err) {
             res.send(err).status(400); // Envío de código de error en caso que aplique.
             return;
         }
         res.send(result); // Envío del resultado de la consulta.
    });
    
})

module.exports = routerMedicion