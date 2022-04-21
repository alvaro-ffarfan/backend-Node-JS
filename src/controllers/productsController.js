const pool = require("../../dbConfig");
const queries = require("../queries/queriesProducts");

//Get list of products
const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//Get one Product
const getProductById = (req, res) => {
  const id_product = parseInt(req.params.id_product);
  pool.query(queries.getProductById, [id_product], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//Post product
const addProduct = (req, res) => {
  const { name_product, description_product, quantity_product, price_product } =
    req.body;
  //check if product exist
  pool.query(queries.checkProductExists, [name_product], (error, results) => {
    if (results.rows.length) {
      res.send("Product already exists");
    }
  });
  // add product into db
  pool.query(
    queries.addProduct,
    [name_product, description_product, quantity_product, price_product],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Product Created Succesfully");
    }
  );
};

//Delete one product
const removeProduct = (req, res) => {
  const id_product = parseInt(req.params.id_product);
  pool.query(queries.getProductById, [id_product], (error, results) => {
    const noProductFound = !results.rows.length;
    if (noProductFound) {
      res.send("Product does not exist in the database");
    }
  });
  pool.query(queries.removeProduct, [id_product], (error, results) => {
    const noProductFound = !results.rows.length;
    if (noProductFound) {
      res.status(200).send("Product removed successfully");
    }
  });
};

//Put one product review all data updates cleaning into de database i don't know 
const updateProduct = (req, res)=>{
  const id_product = parseInt(req.params.id_product);
  const {name_product, description_product, quantity_product, price_product}=req.body;
  pool.query(queries.getProductById, [id_product],(error, results)=>{
    const noProductFound = !results.rows.length;
    if(noProductFound){
      res.send("Product does not exist in the database");
    }
    pool.query(queries.updateProduct, [name_product, description_product, quantity_product, price_product, id_product], (error, results) =>{
      if(error) throw error
      res.status(200).send("Product update successfuly")
    }) 
  })
}

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  removeProduct,
  updateProduct,
};
