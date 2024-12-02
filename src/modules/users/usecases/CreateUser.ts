import { UserRepository } from "../infra/UserRepository";

const userRepository = new UserRepository();

export const createUser = async (
  name: string,
  email: string,
  password: string,
  country_uuid: string,
  status_uuid: string
) => {
  return await userRepository.createUser({
    name,
    email,
    password,
    country_uuid,
    status_uuid,
  });
};
