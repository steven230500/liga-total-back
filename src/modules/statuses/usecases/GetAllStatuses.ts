import { StatusRepository } from "../infra/StatusRepository";

export const getAllStatuses = async () => {
  const statusRepository = new StatusRepository();
  return await statusRepository.getAll();
};
