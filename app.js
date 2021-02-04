const express = require("express");
const exhbs = require("express-handlebars");
const products = require("./products.json");

const app = express();

app.use(express.static("public"));

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exhbs({
    extname: "hbs",
  })
);

app.get("/", (req, res) => {
  res.render("home", { pageTitle: "Homepage" });
});

app.get("/about", (req, res) => {
  res.render("about", { cssFileName: "about", pageTitle: "About us" });
});

app.get("/products", (req, res) => {
  res.render("products", {
    products,
    cssFileName: "products",
    pageTitle: "Products",
  });
});

app.get("/product/:productId", (req, res) => {
  const product = products.find((el) => el.id === req.params.productId);
  res.render("product", { product });
});

app.listen(4444, () => {
  console.log(`Application server on port ${4444} is running`);
});
