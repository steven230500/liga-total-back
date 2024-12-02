import { StatusRepository } from "../infra/StatusRepository";

export const createStatus = async (name: string) => {
  const statusRepository = new StatusRepository();
  return await statusRepository.create({ name });
};
