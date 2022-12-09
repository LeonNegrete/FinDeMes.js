const express = require('express');
const app = express();
const router = express.Router()
const path = require('path');
const mainController = require('../controllers/mainController')

router.get('/', mainController.index);
router.post('/cantidades',mainController.cantidad);
router.get('/valores',mainController.valores)

module.exports = router;