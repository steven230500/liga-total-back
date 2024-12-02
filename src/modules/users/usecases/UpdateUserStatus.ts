import { UserRepository } from "../infra/UserRepository";

const userRepository = new UserRepository();

export const updateUserStatus = async (uuid: string, status_uuid: string) => {
  await userRepository.updateUserStatus(uuid, status_uuid);
};
