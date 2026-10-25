import jwt from "jsonwebtoken";
import { type Request, type Response, type NextFunction } from "express";
import pool from "../config/db.js";

interface JwtPayload {
  id: number;
}

// 1. Define the shape of your User data
interface User {
  id: number;
  name: string;
  email: string;
}

// 2. Extend the built-in Request interface
interface AuthenticatedRequest extends Request {
  user?: User;
}

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const protect = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ status: 401, message: "Not authorized, No token." });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    const user = await pool.query(
      "SELECT id, name, email FROM users WHERE id=$1",
      [decoded.id],
    );

    if (user.rows.length === 0) {
      return res
        .status(401)
        .json({ status: 401, message: "Not authorized, user not found" });
    }

    req.user = user.rows[0];
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ status: 401, message: "Not authorized, token failed." });
  }
};
