import bcrypt from "bcrypt";
import { User } from "../../../domain/models/User";
import { sendEmail } from "../services/EmailService";
import { generateAccessToken } from "../services/TokenService";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  country_uuid: string;
}

export const registerUser = async (data: RegisterInput) => {
  const existingUser = await User.findOne({ where: { email: data.email } });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const newUser = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    status_uuid: "inactive-status-uuid",
    country_uuid: data.country_uuid,
  });

  const verificationToken = generateAccessToken(newUser.uuid);
  const verificationLink = `${process.env.FRONTEND_URL}/verify-account/${verificationToken}`;

  await sendEmail(
    newUser.email,
    "Verify Your Account",
    `<p>Click <a href="${verificationLink}">here</a> to verify your account.</p>`
  );

  return {
    message:
      "User registered successfully. Please check your email to verify your account.",
  };
};
