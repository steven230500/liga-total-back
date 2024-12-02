import { Country } from "../../../domain/models/Country";

export class CountryRepository {
  async findAll() {
    return Country.findAll();
  }

  async create(data: { name: string; status_uuid: string }) {
    return Country.create(data);
  }

  async updateStatus(uuid: string, status_uuid: string) {
    const country = await Country.findByPk(uuid);
    if (!country) throw new Error("Country not found");
    country.status_uuid = status_uuid;
    await country.save();
    return country;
  }
}
