import { UserTeamRepository } from "../infra/UserTeamRepository";

export const getUserTeamByUuid = async (uuid: string) => {
  const repository = new UserTeamRepository();
  return repository.findById(uuid);
};
