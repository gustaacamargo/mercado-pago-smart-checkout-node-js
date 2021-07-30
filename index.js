const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MercadoPago = require('mercadopago');

//Routes
const paymentsRoute = require('./src/routes/paymentsRoute');
const app = express();

MercadoPago.configure({
    sandbox: process.env.MP_SANDBOX,
    access_token: process.env.MP_ACCESS_TOKEN,
});

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/payments',paymentsRoute);

app.listen(process.env.API_PORT, function(err){
    if(err) console.error(err);
    console.log(`API INICIADA NA PORTA ${process.env.API_PORT}`) 
});