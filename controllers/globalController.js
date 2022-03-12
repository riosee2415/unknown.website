const indexController = (req, res) => {
  res.render("index");
};

const introController = (req, res) => {
  res.render("intro");
};

const productController = (req, res) => {
  res.render("product");
};

const globalControllers = {
  indexController,
  introController,
  productController,
};

module.exports = globalControllers;
