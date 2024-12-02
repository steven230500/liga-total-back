import { Status } from "../../../domain/models/Status";

export class StatusRepository {
  async create(data: Partial<Status>) {
    return await Status.create(data);
  }

  async getAll() {
    return await Status.findAll();
  }

  async getById(uuid: string) {
    return await Status.findByPk(uuid);
  }

  async update(uuid: string, data: Partial<Status>) {
    const status = await Status.findByPk(uuid);
    if (!status) throw new Error("Status not found");
    return await status.update(data);
  }
}
