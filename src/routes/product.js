const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:id', productController.readOne);
router.get('/', productController.read);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.destroy);

module.exports = router;