import { UserLeague } from "../../../domain/models/UserLeague";

export class UserLeagueRepository {
  async create(data: any): Promise<UserLeague> {
    return UserLeague.create(data);
  }

  async findAll(): Promise<UserLeague[]> {
    return UserLeague.findAll();
  }

  async findById(uuid: string): Promise<UserLeague | null> {
    return UserLeague.findByPk(uuid);
  }

  async update(uuid: string, data: any): Promise<[number, UserLeague[]]> {
    return UserLeague.update(data, {
      where: { uuid },
      returning: true,
    });
  }
}
