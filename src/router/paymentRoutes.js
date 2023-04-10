const express = require("express");
const router = express.Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.Stripe_Secret);

router.post("/intents", async (req, res) => {
  // create a payment intent

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      payment_method_types:['card'],
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // Return a secret
});

module.exports = router;
