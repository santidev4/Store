const Product = require('../models/Product')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const getDbProducts = (req, res, next) => {
    Product.find()
        .then(result => {
            res.send(result.map(p => {
                // eslint-disable-next-line no-unused-vars
                const { _id, __v, ...restInfo} = p.toJSON()
                return{
                    ...restInfo,
                    id: _id
                }
            }))
        })
        .catch(err => next(err))
}

const getTokenFrom = (request) => {
    const authorization = request.get('authorization')

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

const postProducts = async (req, res) => {
    const body = req.body
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)  // El método decodifica el token y devuelve el objeto en el que se basó el token
    if (!token || !decodedToken.id) return res.status(401).json({ error: 'token missing or invalid' })

    const user = await User.findById(decodedToken.id)

    const newProduct = new Product({
        title: body.title,
        description: body.description,
        price: body.price,
        isActive: body.isActive,
        image: body.image,
        user: user._id
    })

    const savedProduct = await newProduct.save()
    user.products = user.products.concat(savedProduct._id)
    await user.save()

    res.json(savedProduct)
}

const deleteProduct = (req, res, next) => {
    const { id } = req.params

    Product.deleteOne({id})
        .then(result => res.send(result))
        .catch(err => next(err))
}

const updateProduct = (req, res, next) => {
    const { id } = req.params
    const product = req.body

    Product.findOneAndUpdate({id}, product, {new: true})
        .then(result => res.send(result))
        .catch(err => next(err))
}

module.exports = {
    getDbProducts,
    postProducts,
    deleteProduct,
    updateProduct
}