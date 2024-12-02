import { UserLeagueRepository } from "../infra/UserLeagueRepository";

export const getAllUserLeagues = async () => {
  const userLeagueRepository = new UserLeagueRepository();
  return userLeagueRepository.findAll();
};
