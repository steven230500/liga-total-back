import { PlayerPositionRepository } from "../infra/PlayerPositionRepository";

export const getAllPlayerPositions = async () => {
  const playerPositionRepository = new PlayerPositionRepository();
  return playerPositionRepository.findAll();
};
