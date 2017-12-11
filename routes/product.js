const express = require('express');
const router = express.Router();

// Require controller modules
var productController = require('../controllers/productcontroller');

// Get request to get all products
router.get('/', productController.list);

// GET request for insert a new product
router.get('/create', productController.create);

// GET request for chat section
router.get('/chat', function(req, res) {
      res.render('chat', {
        pageTitle: 'Chat',
        pageID: 'chat'
      });
    });

// GET request for edit one product
router.get('/:id/edit', productController.edit);

// POST request for STORE a new product
router.post('/store', productController.store);

// POST request to update a product
router.post('/update', productController.update);

// POST request to delete a product
router.post('/:id/delete', productController.delete);

module.exports = router;