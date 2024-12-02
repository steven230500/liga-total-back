import { UserTeamRepository } from "../infra/UserTeamRepository";

export const createUserTeam = async (data: any) => {
  const repository = new UserTeamRepository();
  return repository.create(data);
};
