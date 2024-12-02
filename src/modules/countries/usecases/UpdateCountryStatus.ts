import { CountryRepository } from "../infra/CountryRepository";

const countryRepository = new CountryRepository();

export const updateCountryStatus = async (
  uuid: string,
  status_uuid: string
) => {
  return countryRepository.updateStatus(uuid, status_uuid);
};
