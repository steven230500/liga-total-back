import { UserRepository } from "../infra/UserRepository";

const userRepository = new UserRepository();

export const getUserById = async (uuid: string) => {
  return await userRepository.getUserById(uuid);
};

export const getAllUsers = async () => {
  return await userRepository.getUsers();
};
