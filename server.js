const express = require("express");
const productsRoutes = require("./src/routes/products.routes");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/products", productsRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
