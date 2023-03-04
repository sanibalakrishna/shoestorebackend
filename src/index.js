const express = require("express");
require("dotenv").config();
const productRoutes = require("./router/productRoutes");
const orderRoutes = require("./router/orderRoutes");
const paymentRoutes = require('./router/paymentRoutes')
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/payments", paymentRoutes);

app.listen(PORT, () => {
  console.log("server is live at port ", PORT);
});

module.exports = app;
