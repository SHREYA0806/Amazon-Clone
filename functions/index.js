const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IYvfNSFiKn6agAh2go5eJRy5KYbOYGaKtOyvGTPyIoLl5ETcJ1NC2Hj8WKyk8CoC3dg8aC25HNpyubtMp2ZnMzu0057iDyjah')

//API


//App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routers
app.get('/',(request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recived BOOM!!! for this amount >>> ',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits
        currency: "inr",
    });

    //OK - credit
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
//(http://localhost:5001/clone-ddf53/us-central1/api).
