import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// event listner that listen for every database connection
pool.on("connect", () => {
  console.log("connected to the database!");
});

pool.on("error", (err) => {
  console.log("Unexpected error occur", err);
  process.exit(-1);
});

export default pool;
