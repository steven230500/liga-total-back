import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export const generateAccessToken = (uuid: string) => {
  return jwt.sign({ uuid }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (uuid: string) => {
  return jwt.sign({ uuid }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

export const validateAccessToken = (token: string) => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  } catch (error) {
    throw new Error("Invalid access token");
  }
};

export const validateRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
};
