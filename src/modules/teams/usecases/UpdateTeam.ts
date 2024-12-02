import { TeamRepository } from "../infra/TeamRepository";

export const updateTeam = async (uuid: string, data: any) => {
  const teamRepository = new TeamRepository();
  await teamRepository.update(uuid, data);
};
