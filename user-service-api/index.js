const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json([
    {
      name: "Saurabh",
      email: "saurabh@gmail.com",
    },
    {
      name: "Alice",
      email: "alice@gmail.com",
    },
    {
      name: "Bob",
      email: "bob@gmail.com",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
