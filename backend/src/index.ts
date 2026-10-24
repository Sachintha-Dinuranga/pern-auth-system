import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

// health check
app.get("/", (req, res) => {
  res.send("It is working!!!");
});

// server setup
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
