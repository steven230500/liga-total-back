import { Position } from "../../../domain/models/Position";

export class PositionRepository {
  async create(data: any): Promise<Position> {
    return Position.create(data);
  }

  async findAll(): Promise<Position[]> {
    return Position.findAll();
  }

  async findByUuid(uuid: string): Promise<Position | null> {
    return Position.findByPk(uuid);
  }

  async update(uuid: string, data: any): Promise<[number, Position[]]> {
    return Position.update(data, {
      where: { uuid },
      returning: true,
    });
  }
}
