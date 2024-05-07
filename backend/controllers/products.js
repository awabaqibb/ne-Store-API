const getAllProducts = async (req, res) => {
  res.status(201).json({ msg: "products" });
};

const getAllProductsStatic = async (req, res) => {
  res.status(201).json({ msg: "static products" });
};

module.exports = { getAllProducts, getAllProductsStatic };
