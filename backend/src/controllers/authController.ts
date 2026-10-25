import express, { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import pool from "../config/db.js";
import { generateToken, cookieOptions } from "../utils/jwtUtils.js";
import { protect } from "../middleware/authMiddleware.js";

// 1. Create a custom interface that includes the user property
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

// register endpoint
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      status: 400,
      message: "Please provide all the required fields.",
    });
  }

  // check if the user exit
  const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (userExists.rows.length > 0) {
    return res
      .status(400)
      .json({ status: 400, message: "User already exits." });
  }

  // hashed the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
    [name, email, hashedPassword],
  );

  // generate token
  const token = generateToken(newUser.rows[0].id);

  res.cookie("token", token, cookieOptions);

  return res.status(201).json({
    status: 201,
    message: "User registered successfully.",
    data: newUser.rows[0],
  });
};

// Login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ status: 400, message: "Please provide all the feilds." });
  }

  // find a user
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (user.rows.length === 0) {
    return res
      .status(400)
      .json({ status: 400, message: "Invalid username or password!" });
  }

  const userData = user.rows[0];

  // compare user provided password with hashedPassword
  const isMatch = await bcrypt.compare(password, userData.password);

  if (!isMatch) {
    return res
      .status(400)
      .json({ status: 400, message: "Invalid username or password!" });
  }

  const token = generateToken(userData.id);

  res.cookie("token", token, cookieOptions);

  res.status(200).json({
    status: 200,
    message: "User login succesfully",
    data: { id: userData.id, name: userData.name, email: userData.email },
  });
};

// Me
export const getUser = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ status: 401, message: "Not authorized" });
  }

  return res.json({ status: 200, data: req.user });
};

// logout
export const logout = (req: Request, res: Response) => {
  res.cookie("token", "", { ...cookieOptions, maxAge: 1 });
  res.status(200).json({ status: 200, message: "logout succesfully." });
};
