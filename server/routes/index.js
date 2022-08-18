const { Router } = require('express')
const { getDbProducts, postProducts, deleteProduct, updateProduct } = require('../controllers/index')

const router = Router() 

router.get('/products', getDbProducts)
router.post('/products', postProducts)
router.delete('/products/:id', deleteProduct)
router.patch('/products/:id', updateProduct)
// router.get('/generate', generateSell)

module.exports = router