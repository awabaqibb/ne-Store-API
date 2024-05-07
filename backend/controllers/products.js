const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(201).json({ msg: products });
};

const getAllProductsStatic = async (req, res) => {
  //res.status(201).json({ msg: product });
};

const getProduct = async (req, res) => {
  const queryObject = {};

  Object.keys(req.query).forEach((key) => {
    queryObject[key] = req.query[key];
  });

  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(201).json({ msg: products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic, getProduct };
