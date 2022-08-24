// const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    isActive: Boolean,
    image: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
})

const Product = model('Product', productSchema)

// const product = Product({
//     
// })

// product.save()
//     .then(result => {
//         console.log(result)
//         mongoose.connection.close()
//     })
//     .catch(err => {
//         console.error(err)
//     })

module.exports = Product