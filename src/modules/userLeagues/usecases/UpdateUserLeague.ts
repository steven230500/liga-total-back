import { UserLeagueRepository } from "../infra/UserLeagueRepository";

export const updateUserLeague = async (uuid: string, data: any) => {
  const userLeagueRepository = new UserLeagueRepository();
  return userLeagueRepository.update(uuid, data);
};
