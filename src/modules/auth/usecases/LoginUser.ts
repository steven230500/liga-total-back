import { UserRepository } from "../../users/infra/UserRepository";
import { comparePasswords } from "../utils/passwordUtils";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../services/TokenService";

const userRepository = new UserRepository();

export const loginUser = async (email: string, password: string) => {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const accessToken = generateAccessToken(user.uuid);
  const refreshToken = generateRefreshToken(user.uuid);

  return { accessToken, refreshToken };
};
