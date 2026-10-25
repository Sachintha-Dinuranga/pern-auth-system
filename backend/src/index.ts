import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "../src/routes/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);

// server setup
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
