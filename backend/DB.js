const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "book_app",
});
db.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log(err);
  }
});
 module.exports = db