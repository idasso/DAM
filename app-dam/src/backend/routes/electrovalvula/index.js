const express = require('express')
const pool = require('../../mysql-connector')

const routerElectrovalvula = express.Router()


routerElectrovalvula.post('/:id/:abrir', function (req, res) {
    console.log("llegó el pedido de post con: "+req.params.id)
    electrovalvulaId = req.params.id
    console.log("post Abrir?: "+req.params.abrir)
    control = req.params.abrir
    //console.log("llegó al backend el body: "+JSON.parse(req.body))

    pool.query('INSERT INTO `Log_Riegos` (`apertura`, `fecha`, `electrovalvulaId`) VALUES ('+control+', current_timestamp(), '+electrovalvulaId+')', function(err, result, fields) {
         if (err) {
             res.send(err).status(400); // Envío de código de error en caso que aplique.
             return;
         }
         res.send(result); // Envío del resultado de la consulta.
    });
    
})

//Metodo GET para obtener el ID de electroválvula asociada al ID de dispositivo. 
routerElectrovalvula.get('/:id', function (req, res) {
    console.log("llegó al backend el id: "+req.params.id)    
    pool.query('Select electrovalvulaId from Dispositivos Where dispositivoId='+req.params.id, function(err, result, fields) {
         if (err) {
             res.send(err).status(400); // Envío de código de error en caso que aplique.
             return;
         }
         res.send(result); // Envío del resultado de la consulta.
    });
    
})

module.exports = routerElectrovalvula


// Consulta para saber qué EV corresponde a qué dispositivo
// Select electrovalvulaId from Mediciones Where dispositivoId='+req.params.id
// INSERT INTO `Log_Riegos` (`apertura`, `fecha`, `electrovalvulaId`) VALUES (accionAbrir, current_timestamp(), electrovalvulaId)

// Comando de accion sobre una EV
// INSERT INTO `Log_Riegos` (`apertura`, `fecha`, `electrovalvulaId`) VALUES (accionAbrir, current_timestamp(), electrovalvulaId)
