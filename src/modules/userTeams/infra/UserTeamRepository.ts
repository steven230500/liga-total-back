import { UserTeam } from "../../../domain/models/UserTeam";

export class UserTeamRepository {
  async create(data: any): Promise<UserTeam> {
    return UserTeam.create(data);
  }

  async findAll(): Promise<UserTeam[]> {
    return UserTeam.findAll();
  }

  async findById(uuid: string): Promise<UserTeam | null> {
    return UserTeam.findByPk(uuid);
  }

  async update(uuid: string, data: any): Promise<[number, UserTeam[]]> {
    return UserTeam.update(data, {
      where: { uuid },
      returning: true,
    });
  }
}
