import { PlayerRepository } from "../infra/PlayerRepository";

export const getAllPlayers = async () => {
  const playerRepository = new PlayerRepository();
  return playerRepository.findAll();
};
