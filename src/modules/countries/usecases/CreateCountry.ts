import { CountryRepository } from "../infra/CountryRepository";

const countryRepository = new CountryRepository();

export const createCountry = async (name: string, status_uuid: string) => {
  return countryRepository.create({ name, status_uuid });
};
