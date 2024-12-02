import { CountryRepository } from "../infra/CountryRepository";

const countryRepository = new CountryRepository();

export const getAllCountries = async () => {
  return countryRepository.findAll();
};
