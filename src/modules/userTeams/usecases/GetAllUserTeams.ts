import { UserTeamRepository } from "../infra/UserTeamRepository";

export const getAllUserTeams = async () => {
  const repository = new UserTeamRepository();
  return repository.findAll();
};
