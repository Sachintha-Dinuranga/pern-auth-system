import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

// health check
app.get("/", (req, res) => {
  res.send("It is working!!!");
});

// server setup
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
