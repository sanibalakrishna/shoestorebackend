const express = require("express");
const router = express.Router();
const { getAllProducts, getProduct } = require("../database/products");

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send({ status: "Ok", data: products });
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await getProduct(id);
    if (!product) {
      return res
        .status(404)
        .send({ status: "Failed", error: "product not found" });
    }
    res.send({ status: "Ok", data: product });
  } catch (error) {
    return res.status(401).send({ status: "Failed", error: error.message });
  }
});

module.exports = router;
