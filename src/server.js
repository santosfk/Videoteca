const express = require("express");
require("dotenv").config();
const Routes = require("./routes");
const connectDatabase = require("./database");
connectDatabase();
const app = express();
app.use(express.json());
app.use(Routes);
app.listen(3001, () => console.log("server rodando na porta 3001"));
