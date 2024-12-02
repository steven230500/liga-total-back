import { Player } from "../../../domain/models/Player";

export class PlayerRepository {
  async create(data: any): Promise<Player> {
    return Player.create(data);
  }

  async findAll(): Promise<Player[]> {
    return Player.findAll();
  }

  async findById(uuid: string): Promise<Player | null> {
    return Player.findByPk(uuid);
  }

  async update(uuid: string, data: any): Promise<[number, Player[]]> {
    return Player.update(data, {
      where: { uuid },
      returning: true, // Devuelve las filas actualizadas
    });
  }
}
