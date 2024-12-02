import { StatusRepository } from "../infra/StatusRepository";

export const getStatusById = async (uuid: string) => {
  const statusRepository = new StatusRepository();
  return await statusRepository.getById(uuid);
};
