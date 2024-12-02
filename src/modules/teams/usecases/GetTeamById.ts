import { TeamRepository } from "../infra/TeamRepository";

export const getTeamById = async (uuid: string) => {
  const teamRepository = new TeamRepository();
  return await teamRepository.findById(uuid);
};
