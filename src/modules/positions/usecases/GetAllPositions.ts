import { PositionRepository } from "../infra/PositionRepository";

export const getAllPositions = async () => {
  const positionRepository = new PositionRepository();
  return positionRepository.findAll();
};
