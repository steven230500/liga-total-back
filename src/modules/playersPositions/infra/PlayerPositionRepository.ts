import { PlayerPosition } from "../../../domain/models/PlayerPosition";

export class PlayerPositionRepository {
  async create(data: any): Promise<PlayerPosition> {
    return PlayerPosition.create(data);
  }

  async findAll(): Promise<PlayerPosition[]> {
    return PlayerPosition.findAll();
  }

  async findById(uuid: string): Promise<PlayerPosition | null> {
    return PlayerPosition.findByPk(uuid);
  }

  async update(uuid: string, data: any): Promise<[number, PlayerPosition[]]> {
    return PlayerPosition.update(data, {
      where: { uuid },
      returning: true,
    });
  }
}
