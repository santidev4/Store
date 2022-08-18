require('dotenv').config()
const server = require('./src/index')

const app = server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`) // eslint-disable-line no-console
})

module.exports = { server, app }
