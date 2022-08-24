const { Router } = require('express')
const { getDbProducts, postProducts, deleteProduct, updateProduct, getDbCategories } = require('../controllers/index')

const router = Router() 

router.get('/products', getDbProducts)
router.post('/products', postProducts)
router.delete('/products/:id', deleteProduct)
router.patch('/products/:id', updateProduct)
router.get('/categories', getDbCategories)
// router.get('/generate', generateSell)

module.exports = router