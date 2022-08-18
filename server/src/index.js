require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('../routes/index')
const userRouter = require('../controllers/user')
const loginRouter = require('../controllers/login')




require('../mongo.js')

const server = express()

server.name = 'API'

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(cookieParser())
server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

server.use('/', routes)
server.use('/', userRouter)
server.use('/login', loginRouter)


const errorHandler = (error, req, res, next) => {

    if (error.name === 'CastError') return res.status(400).send({ error: 'malformatted id' })
    else if (error.name === 'ValidationError') return res.status(400).json({ error: error.message })
    else if (error.name === 'JsonWebTokenError') return res.status(401).json({ error: 'invalid token' })
    
    next(error)
}

server.use(errorHandler)

// // Error catching endware.
// server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//     const status = err.status || 500
//     const message = err.message || err
//     console.error(err)
//     res.status(status).send(message)
// })

module.exports = server