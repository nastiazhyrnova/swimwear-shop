const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JAK0OJVwUyiicVaZQpgbjqEo0hPAq0UzUa3aehSQUgDZNYxebTlkqAxQ7wLey4FmmMCnmZKMSh4gRrFIXlQudAu00sUXXLbA0"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received, total>>" + total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/bikini-shop-25276/us-central1/api - endpoint
