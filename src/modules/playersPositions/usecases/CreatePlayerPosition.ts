import { PlayerPositionRepository } from "../infra/PlayerPositionRepository";

export const createPlayerPosition = async (data: any) => {
  const playerPositionRepository = new PlayerPositionRepository();
  return playerPositionRepository.create(data);
};
