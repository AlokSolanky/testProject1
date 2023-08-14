const Product = require("../models/product");

module.exports.getProduct = (req, res) => {
  Product.findAll().then((data) => {
    res.json(data);
  });
};

module.exports.addProduct = (req, res) => {
  const product = req.body;
  console.log(product);
  Product.create(product).then((data) => {
    res.json(data);
  });
};

module.exports.deleteProduct = (req, res) => {
  const prodId = req.params.prodId;
  Product.destroy({ where: { id: prodId } });
};
