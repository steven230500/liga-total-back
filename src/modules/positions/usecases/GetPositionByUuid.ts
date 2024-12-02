import { PositionRepository } from "../infra/PositionRepository";

export const getPositionByUuid = async (uuid: string) => {
  const positionRepository = new PositionRepository();
  const position = await positionRepository.findByUuid(uuid);

  if (!position) {
    throw new Error("Position not found");
  }

  return position;
};
