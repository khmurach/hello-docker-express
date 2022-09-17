const express = require("express");
const app = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from Express in Docker");
});

app.listen(port, () => console.log(`Started on http://${host}:${port}`));
