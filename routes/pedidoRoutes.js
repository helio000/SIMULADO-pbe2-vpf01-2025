const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findOne); 

module.exports = router;
