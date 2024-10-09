const express = require("express");
const cors = require("cors");
const { router } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(5001, () => console.log("Server rodando na porta 5001"));
