import { TeamRepository } from "../infra/TeamRepository";

export const getAllTeams = async () => {
  const teamRepository = new TeamRepository();
  return await teamRepository.findAll();
};
