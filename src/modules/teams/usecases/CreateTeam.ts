import { TeamRepository } from "../infra/TeamRepository";

export const createTeam = async (data: any) => {
  const teamRepository = new TeamRepository();
  return await teamRepository.create(data);
};
