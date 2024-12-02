import { UserTeamRepository } from "../infra/UserTeamRepository";

export const updateUserTeam = async (uuid: string, data: any) => {
  const repository = new UserTeamRepository();
  return repository.update(uuid, data);
};
