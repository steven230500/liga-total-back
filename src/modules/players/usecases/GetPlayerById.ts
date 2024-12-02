import { PlayerRepository } from "../infra/PlayerRepository";

export const getPlayerById = async (uuid: string) => {
  const playerRepository = new PlayerRepository();
  return playerRepository.findById(uuid);
};
