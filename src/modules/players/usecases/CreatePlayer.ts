import { PlayerRepository } from "../infra/PlayerRepository";

export const createPlayer = async (data: any) => {
  const playerRepository = new PlayerRepository();
  return playerRepository.create(data);
};
