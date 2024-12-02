import { PlayerRepository } from "../infra/PlayerRepository";

export const updatePlayer = async (uuid: string, data: any) => {
  const playerRepository = new PlayerRepository();
  return playerRepository.update(uuid, data);
};
