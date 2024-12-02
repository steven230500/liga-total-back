import { UserLeagueRepository } from "../infra/UserLeagueRepository";

export const getUserLeagueByUuid = async (uuid: string) => {
  const userLeagueRepository = new UserLeagueRepository();
  return userLeagueRepository.findById(uuid);
};
