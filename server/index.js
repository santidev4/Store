require('dotenv').config()
const server = require('../server/src')

const app = server.listen(process.env.PORT || 3001, () => {
    console.log(`%s listening at ${process.env.PORT}`) // eslint-disable-line no-console
})

module.exports = { server, app }
