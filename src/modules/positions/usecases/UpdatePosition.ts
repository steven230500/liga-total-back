import { PositionRepository } from "../infra/PositionRepository";

export const updatePosition = async (uuid: string, data: any) => {
  const positionRepository = new PositionRepository();
  return positionRepository.update(uuid, data);
};
