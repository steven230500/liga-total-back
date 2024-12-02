import { UserLeagueRepository } from "../infra/UserLeagueRepository";

export const createUserLeague = async (data: any) => {
  const userLeagueRepository = new UserLeagueRepository();
  return userLeagueRepository.create(data);
};
