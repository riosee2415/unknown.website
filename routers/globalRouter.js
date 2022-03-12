const express = require("express");
const globalControllers = require("../controllers/globalController");

const router = express.Router();

router.get("/", globalControllers.indexController);

router.get("/intro", globalControllers.introController);

router.get("/product", globalControllers.productController);

module.exports = router;
