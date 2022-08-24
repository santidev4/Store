const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    timestamps: false
})

const Category = model('Category', categorySchema)

module.exports = Category