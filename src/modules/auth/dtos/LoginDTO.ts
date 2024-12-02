import Joi from "joi";

export const LoginDTO = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
