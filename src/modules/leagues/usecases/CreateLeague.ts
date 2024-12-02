import { LeagueRepository } from "../infra/LeagueRepository";

export const createLeague = async (data: any) => {
  const leagueRepository = new LeagueRepository();
  return leagueRepository.create(data);
};
