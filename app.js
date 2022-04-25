const express = require("express");
const { randomUUID } = require("crypto");
const app = express();
const products = [];

app.post("/produtos", (request, response) => {
  const body = request.body;
  const product = {
    name: "papel",
    price: "200",
    id: randomUUID(),
  };
  products.push(product);
  response.json(product);
  return console.log(body);
});
app.get("/produtos", (request, response) => {
  return response.json(products);
});
app.listen(3002, () => console.log("servidor rodando na porta 3002"));
