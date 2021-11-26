const express = require("express");
const db = require("./queries");
const cors = require("cors");

var app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Node Server</h1>");
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);

const port_conn = 5000;

var server = app.listen(port_conn, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server listening at http://%s:%s", host, port);
});
