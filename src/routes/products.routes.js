const { Router } = require("express");
const productsController = require("../controllers/productsController");

const router = Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.addProduct);
router.get("/:id_product", productsController.getProductById);
router.put("/:id_product", productsController.updateProduct);
router.delete("/:id_product", productsController.removeProduct);

module.exports = router;