//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
var pool = require('./mysql-connector');
const jwt = require('jsonwebtoken')
const routerDispositivo = require('./routes/dispositivos') // 
const routerMedicion = require('./routes/mediciones/')
const routerElectrovalvula = require('./routes/electrovalvula/')
const routerLogRiego = require('./routes/logRiego/')



const YOUR_SECRET_KEY = 'mi llave' // Creacion manual de llave utilizada en la generación del token.
var testUser = {username: 'test', password: '1234'}  // Creacion manual de ususario y contraseña.

const corsOptions = {
    origin: '*',
}

var myLogger = function (req, res, next) { // Definición de función de callback de prueba.
    console.log('LOGGED')
    next()
}

var authenticator = function (req, res, next) {
    let autHeader = (req.headers.authorization || '')
    if (autHeader.startsWith('Bearer ')) {
        token = autHeader.split(' ')[1]
    } else {
        res.status(401).send({ message: 'Se requiere un token de tipo Bearer' })
    }
    jwt.verify(token, YOUR_SECRET_KEY, function(err) {
      if(err) {
        res.status(403).send({ message: 'Token inválido' })
      }
    })
    next()
}

// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));
app.use(cors(corsOptions))
app.use(myLogger) // Este middleware se va  a ejecutar en todos los endpoint que tengo definidos para la aplicación dado que no se indicó una ruta para restrigir el uso.

app.use('/dispositivo', routerDispositivo) // Al indicar la ruta el callback que se pasa sólo aplicará a esa ruta.
app.use('/mediciones', routerMedicion)
app.use('/electrovalvula', routerElectrovalvula)
app.use('/logRiego', routerLogRiego)


//=======[ Main module code ]==================================================

// var cb0 = function (req, res, next) {
//     // Hago saneamiento de la request
//     // y luego paso al siguiente callback
//     // si se cumple cierta condición
//     console.log('CB0')
//     next()
// }

// var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }


var cb2 = function (req, res, next) {
    res.send({'mensaje': 'Hola DAM!'}).status(200)
}

// app.get('/', [cb0, cb1, cb2]);
app.get('/', cb2);

app.post('/login', (req, res) => {
    if (req.body) {
        var userData = req.body

        if (testUser.username === userData.username && testUser.password === userData.password) {
            var token = jwt.sign(userData, YOUR_SECRET_KEY)
            res.status(200).send({
                signed_user: userData,
                token: token
            })
        } else {
            res.status(403).send({
                errorMessage: 'Auth required'
            })
        }
    } else {
        res.status(403).send({
            errorMessage: 'Se requiere un usuario y contraseña'
        })
    }
})

app.get('/prueba', authenticator, function(req, res) {
    res.send({message: 'Está autenticado, accede a los datos'})
})

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});
