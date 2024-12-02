import { Router, Request, Response } from "express";
import { asyncHandler } from "../../../shared/middlewares/asyncHandler";
import { createUserTeam } from "../usecases/CreateUserTeam";
import { getAllUserTeams } from "../usecases/GetAllUserTeams";
import { getUserTeamByUuid } from "../usecases/GetUserTeamByUuid";
import { updateUserTeam } from "../usecases/UpdateUserTeam";

const router = Router();

// Crear una nueva relación usuario-equipo
router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const userTeam = await createUserTeam(req.body);
    res.status(201).json(userTeam);
  })
);

// Obtener todas las relaciones usuario-equipo
router.get(
  "/",
  asyncHandler(async (_req: Request, res: Response) => {
    const userTeams = await getAllUserTeams();
    res.json(userTeams);
  })
);

// Obtener una relación usuario-equipo por UUID
router.get(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const userTeam = await getUserTeamByUuid(uuid);
    res.json(userTeam);
  })
);

// Actualizar una relación usuario-equipo por UUID
router.put(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const [affectedRows, updatedUserTeams] = await updateUserTeam(
      uuid,
      req.body
    );

    if (affectedRows === 0) {
      return res.status(404).json({ error: "User team not found" });
    }

    res.json(updatedUserTeams[0]);
  })
);

export default router;
