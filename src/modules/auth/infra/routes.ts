import { Router, Request, Response } from "express";
import { asyncHandler } from "../../../shared/middlewares/asyncHandler";
import { registerUser } from "../usecases/RegisterUser";
import { validate } from "../../../shared/middlewares/validate";
import { RegisterDTO } from "../dtos/RegisterDTO";
import { LoginDTO } from "../dtos/LoginDTO";

const router = Router();

// Registro de usuario
router.post(
  "/register",
  validate(RegisterDTO),
  asyncHandler(async (req: Request, res: Response) => {
    const user = await registerUser(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  })
);

// Login de usuario
router.post(
  "/login",
  validate(LoginDTO),
  asyncHandler(async (req: Request, res: Response) => {
    // Aquí se debe implementar el caso de uso LoginUser
    res.status(200).json({ message: "Login not implemented yet" });
  })
);

export default router;
