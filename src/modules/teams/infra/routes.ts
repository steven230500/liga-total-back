import { Router, Request, Response } from "express";
import { createTeam } from "../usecases/CreateTeam";
import { getAllTeams } from "../usecases/GetAllTeams";
import { getTeamById } from "../usecases/GetTeamById";
import { updateTeam } from "../usecases/UpdateTeam";

const router = Router();

// Ruta para crear un equipo
router.post("/", async (req: Request, res: Response) => {
  const { name, city, budget, motto, status_uuid } = req.body;
  try {
    const team = await createTeam({ name, city, budget, motto, status_uuid });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Ruta para obtener todos los equipos
router.get("/", async (req: Request, res: Response) => {
  try {
    const teams = await getAllTeams();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Ruta para obtener un equipo por su UUID
router.get("/:uuid", async (req: Request<{ uuid: string }>, res: Response) => {
  const { uuid } = req.params;
  try {
    const team = await getTeamById(uuid);
    res.json(team);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
});

// Ruta para actualizar un equipo
router.put("/:uuid", async (req: Request<{ uuid: string }>, res: Response) => {
  const { uuid } = req.params;
  const data = req.body;
  try {
    const updatedTeam = await updateTeam(uuid, data);
    res.json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
