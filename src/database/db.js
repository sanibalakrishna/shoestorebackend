const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.Mongodb_URL);
const database = client.db("test");
const products = database.collection("products");
const orders = database.collection("orders");

module.exports = { products,orders };
