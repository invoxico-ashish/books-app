const express = require("express");
const app = express();
const db = require("./DB");
const cors = require("cors");
PORT = 8000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello backend");
});

// GET METHOD
app.get("/getbooks", (req, res) => {
  const q = "select * from books";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

// POST METHODS
app.post("/bookscreate", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const cover = req.body.cover;
  try {
    const q =
      "insert into books (`title`,`description`,`price`,`cover`) values(?)";
    const values = [title, description, price, cover];
    db.query(q, [values], (err, data) => {
      res.json("success");
    });
  } catch (err) {
    console.log(err);
  }
});

//DELETE METHOD

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const q = "DELETE  FROM books WHERE id =?";

  try {
    await db.query(q, [id], (err, data) => {
      if (!err) {
        return res.status(200).json({
          success: true,
          message: "deleted successfully",
          data,
        });
      }
      return res.status(400).json({
        success: false,
        message: "Unsuccessfull",
        err,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE METHOD

app.put("/updatebooks/:id", async (req, res) => {
  console.log(req.body)
  const id = req.params.id;
  const q =
    "UPDATE books SET `title` = ?,`description` = ?,`price` = ?,`cover` = ? WHERE id =?";
  try {
    const values = [
      req.body.title,
      req.body.description,
      req.body.price,
      req.body.cover,
    ];
    console.log(values,id)

    await db.query(q, [...values, id], (err, data) => {
      if (!err) {
        return res.status(200).json({
          success: true,
          mesaage: "Sucessfully updated",
          data,
        });
      }
      return res.status(400).json({
        success: false,
        message: "updation failed",
        err,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`server is running on the port ${PORT}`);
  }
});
