import Joi from "joi";

export const RegisterDTO = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  country_uuid: Joi.string().uuid().required(),
});
