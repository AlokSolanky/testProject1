const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/product");

router.get("/", productControllers.getProduct);
router.post("/", productControllers.addProduct);
router.delete("/:prodId", productControllers.deleteProduct);

module.exports = router;
