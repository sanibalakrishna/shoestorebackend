const express = require("express");
require("dotenv").config();
const productRouter = require("./router/productRouter");
const orderRouter = require("./router/orderRouter");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
app.use(cors({origin:"*"}))
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => {
  console.log("server is live at port ", PORT);
});
