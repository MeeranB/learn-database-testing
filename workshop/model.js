const db = require("./database/connection");

function getUsers() {
  return db.query("SELECT * FROM users").then(result => result.rows);
}

module.exports = { getUsers };
