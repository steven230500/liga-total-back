import { User } from "../../../domain/models/User";

export const getUserById = async (uuid: string) => {
  const user = await User.findByPk(uuid);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
