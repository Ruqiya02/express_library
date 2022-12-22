const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Salam Fuad");
});

app.get("/card", (req, res) => {
  res.send("Bu route kartlar üçün cavabdehdir");
});
app.get("/client", (req, res) => {
  res.send("Bu marşrut müştərilər üçün cavabdehdir");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
