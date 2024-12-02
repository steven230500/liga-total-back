import { Team } from "../../../domain/models/Team";

export class TeamRepository {
  // Crear un equipo
  async create(data: Partial<Team>): Promise<Team> {
    const team = await Team.create(data);
    return team;
  }

  // Obtener un equipo por uuid
  async findById(uuid: string): Promise<Team | null> {
    return await Team.findByPk(uuid);
  }

  // Obtener todos los equipos
  async findAll(): Promise<Team[]> {
    return await Team.findAll();
  }

  // Actualizar un equipo por uuid
  async update(uuid: string, data: Partial<Team>): Promise<void> {
    const team = await this.findById(uuid);
    if (!team) {
      throw new Error("Team not found");
    }
    await team.update(data);
  }
}
