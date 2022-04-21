const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id_product = $1";
const checkProductExists = "SELECT p FROM products p WHERE p.name_product = $1";
const addProduct =
  "INSERT INTO products (name_product, description_product, quantity_product, price_product) VALUES ($1, $2, $3, $4)";

const removeProduct = "DELETE FROM products WHERE id_product = $1";

const updateProduct =
  "UPDATE products SET name_product = $1, description_product = $2, quantity_product = $3, price_product = $4 WHERE id_product = $5";

module.exports = {
  getProducts,
  getProductById,
  checkProductExists,
  addProduct,
  removeProduct,
  updateProduct,
};
