import { LeagueRepository } from "../infra/LeagueRepository";

export const updateLeague = async (uuid: string, data: any) => {
  const leagueRepository = new LeagueRepository();
  return leagueRepository.update(uuid, data);
};
