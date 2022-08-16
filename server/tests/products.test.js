const mongoose = require('mongoose')
const { app } = require('../index')
const Product = require('../models/Product')
const { initialProducts, api, getAllContent } = require('./helpers')




// hook que se ejecuta antes de cada test
beforeEach(async () => {
    await Product.deleteMany({})

    // const product1 = new Product(initialProducts[0])
    // await product1.save()

    // const product2 = new Product(initialProducts[1])
    // await product2.save()

    // en paralelo -- puede dar un orden cualquiera
    const productsObjects = initialProducts.map(product => new Product(product))
    const promises = productsObjects.map(product => product.save())
    await Promise.all(promises)

    // // secuencial -- el orden es el mismo
    // for(const product of initialProducts) {
    //     const productObject = new Product(product)
    //     await productObject.save()
    // }
})

test('products are returned as JSON', async () => {
    await api.get('/products')
        .expect(200)
        .expect('Content-Type', /application\/json/) 
})

test('there are two products', async () => {
    const response = await getAllContent()
    expect(response.body).toHaveLength(2)
})

test('poste one product', async () => {
    const newProduct = {
        title: 'Porter',
        description: 'cerveza negra',
        price: 450,
        isActive: true,
        image: 'http://sfsdgdfvxcv'
    }

    await api.post('/products')
        .send(newProduct)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    const response = await getAllContent()

    const titles = response.body.map(product => product.title)
    expect(titles).toContain(newProduct.title)

    expect(response.body).toHaveLength(initialProducts.length + 1)
})

test('delete one product', async () => {
    const response = await getAllContent()
    const product = response.body[0]
    
    await api.delete(`/products/${product.id}`)
        .expect(200)
    
    const products = await getAllContent()
    
    expect(products.body.length).toEqual(initialProducts.length - 1)
    expect(products).not.toContain(product)
})

//TODO hacer test del delete y del patch

afterAll(() => {
    mongoose.connection.close()    // hay que cerrar las conecciones despues de terminar los tests
    app.close()
})

