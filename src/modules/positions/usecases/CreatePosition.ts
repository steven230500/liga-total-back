import { PositionRepository } from "../infra/PositionRepository";

export const createPosition = async (data: any) => {
  const positionRepository = new PositionRepository();
  return positionRepository.create(data);
};
