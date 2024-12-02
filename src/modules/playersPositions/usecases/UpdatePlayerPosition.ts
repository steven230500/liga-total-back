import { PlayerPositionRepository } from "../infra/PlayerPositionRepository";

export const updatePlayerPosition = async (uuid: string, data: any) => {
  const playerPositionRepository = new PlayerPositionRepository();
  return playerPositionRepository.update(uuid, data);
};
