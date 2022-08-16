require('dotenv').config()
const mongoose = require('mongoose')

const { DB_URI, DB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test'
    ? DB_URI_TEST
    : DB_URI

if(!connectionString) console.error('Falta archivo .env')

mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected')
    }).catch(err => console.error(err))

