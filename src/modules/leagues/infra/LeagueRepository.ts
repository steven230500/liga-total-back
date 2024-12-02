import { League } from "../../../domain/models/League";

export class LeagueRepository {
  async create(data: any): Promise<League> {
    return League.create(data);
  }

  async findAll(): Promise<League[]> {
    return League.findAll();
  }

  async findById(uuid: string): Promise<League | null> {
    return League.findByPk(uuid);
  }

  async update(uuid: string, data: any): Promise<[number, League[]]> {
    return League.update(data, {
      where: { uuid },
      returning: true,
    });
  }
}
