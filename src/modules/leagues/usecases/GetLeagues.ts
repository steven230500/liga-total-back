import { LeagueRepository } from "../infra/LeagueRepository";

export const getLeagues = async () => {
  const leagueRepository = new LeagueRepository();
  return leagueRepository.findAll();
};
