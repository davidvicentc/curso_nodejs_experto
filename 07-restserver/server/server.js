require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/usuarios", (req, res) => {
  res.json("get usuarios");
});

app.post("/usuarios", (req, res) => {
  let body = req.body;

  res.json({
    msg: "post usuarios",
    body
  });
});

app.put("/usuarios/:id", (req, res) => {
  let id = req.params.id;

  res.json({
    msg: "put usuarios",
    id
  });
});

app.delete("/", (req, res) => {
  res.json("delete usuarios");
});

app.listen(process.env.PORT, () => {
  console.log("escuchando puerto 4000");
});
