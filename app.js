const express = require("express");

const app = express();
app.get("/rota", (request, response) => {
  return response.json({ message: "alo garaio" });
});
app.listen(3002, () => console.log("servidor rodando na porta 3002"));
