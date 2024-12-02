import { Request, Response, NextFunction } from "express";
import Joi, { Schema } from "joi";

export const validate = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(400).json({
        error: "Validation error",
        details: error.details.map((detail) => detail.message),
      });
    } else {
      next();
    }
  };
};
