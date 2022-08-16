const { server } = require('../index')
const supertest = require('supertest')
const api = supertest(server)
const User = require('../models/User')

const initialProducts = [
    {
        title: 'IPA',
        description: 'cerveza amarga',
        price: 500,
        isActive: true,
        image: 'http://sfsdgdfvxcv'
    },
    {
        title: 'APA',
        description: 'cerveza un poco amarga',
        price: 450,
        isActive: true,
        image: 'http://sfsdgdfvxcv'
    }
]

const getAllContent = async () => {
    const response = await api.get('/products')
    return response
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    initialProducts,
    api,
    getAllContent,
    usersInDb
}