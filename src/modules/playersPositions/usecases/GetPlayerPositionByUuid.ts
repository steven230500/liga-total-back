import { PlayerPositionRepository } from "../infra/PlayerPositionRepository";

export const getPlayerPositionByUuid = async (uuid: string) => {
  const playerPositionRepository = new PlayerPositionRepository();
  return playerPositionRepository.findById(uuid);
};
