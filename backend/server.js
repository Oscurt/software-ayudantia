const express = require("express");
const pool = require("./db");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const test = await pool.query('SELECT * FROM Usuario');
  res.send(test.rows);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
