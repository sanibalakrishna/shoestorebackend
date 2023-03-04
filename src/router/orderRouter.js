const express = require("express");
const router = express.Router();
const { createOrder, getOrder } = require("../database/orders");

router.get("/:reference", async (req, res) => {
  const ref = req.params.reference;
  const order = await getOrder(ref);
  if (!order) {
    return res.status(404).send({ status: "Failed", error: "Order not found" });
  }

  res.status(200).send({ status: "Ok", data: order });
});

router.post("/", async (req, res) => {
  const orderData = req.body;
  orderData.ref = (Math.random() + 1).toString(36).substring(7);
  const newOrder = await createOrder(orderData);
  res.status(201).send({ status: "Ok", data: newOrder });
});
module.exports = router;
