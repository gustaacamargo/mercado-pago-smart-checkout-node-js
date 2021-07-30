const express = require('express');
const routes = express.Router();

const paymentsController = require('../controllers/paymentsController');

routes.post('/createSignature', paymentsController.checkoutTest)

module.exports = routes;