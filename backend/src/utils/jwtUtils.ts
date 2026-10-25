import express from "express";
import { type CookieOptions } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { pool } from "../config/db.js";

// define cookie options
export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
};

const JWT_SECRET = process.env.JWT_SECRET || "secret";

// generate tokens
export const generateToken = (id: number) => {
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "30d" });
};
