const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  database: "test",
  port: 5434,
  user: "admin",
  password: "admin",
});

const getUsers = (request, response) => {
  // request -> los datos cuando el cliente pide al servidor (frontend -> banckend)
  // response -> los datos que el servidor envia al cliente (backend -> frontend)
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  console.log("CREATE USER");
  console.log(req.body);
  const { name, password } = req.body;

  pool.query("INSERT INTO users (name, password) VALUES ($1, $2"),
    [name, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send("Usuario agregado con ID: ${result.insertId}");
    };
  //res.status(200).send(req.body);
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, password } = req.body;

  pool.query(
    "UPDATE users SET name = $1, password = $2 WHERE id = $3",
    [name, password, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send("Usuario con ID ${id} actualizado...");
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send("Usuario con ID ${id} eliminado...");
  });
};

/*
3.1
3.2
3.3
*/
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
