import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRouter from "../src/routes/auth.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

// health check
app.get("/", (req, res) => {
  res.send("It is working!!!");
});

app.use(authRouter);

// server setup
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
