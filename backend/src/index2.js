const express = require("express");
const db = require("./queries2");
const dbLogin = require("./queriesLogin");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (request, responde) => {
  responde.send("<h1>Servidor Node</h1>");
});

//URLS de nuestro API
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", urlencodedParser, db.createUser);
app.put("/users/:id", urlencodedParser, db.updateUser); //registro como un todo
//patch -> solo para uno o mas campos
app.delete("/users/:id", db.deleteUser);

//URLs para Login
app.post("/login", urlencodedParser, dbLogin.getLogin);

const port_conn = 5000;

let server = app.listen(port_conn, () => {
  const port = server.address().port;

  console.log("Servidor iniciado en el puerto %s...", port);
});
