const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  database: "test",
  port: 5434,
  user: "admin",
  password: "admin",
});

const getLogin = (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  //console.log(email, password);
  pool.query(
    "SELECT * FROM users WHERE email = $1 AND password = $2",
    [email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      //console.log(results.rows);
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getLogin,
};
