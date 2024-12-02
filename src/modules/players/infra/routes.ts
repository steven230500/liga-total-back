import { Router, Request, Response } from "express";
import { asyncHandler } from "../../../shared/middlewares/asyncHandler";
import { createPlayer } from "../usecases/CreatePlayer";
import { getAllPlayers } from "../usecases/GetAllPlayers";
import { getPlayerById } from "../usecases/GetPlayerById";
import { updatePlayer } from "../usecases/UpdatePlayer";

const router = Router();

router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const player = await createPlayer(req.body);
    res.status(201).json(player);
  })
);

router.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const players = await getAllPlayers();
    res.json(players);
  })
);

router.get(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const user = await getPlayerById(uuid);
    res.json(user);
  })
);

router.put(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const [affectedRows, updatedPlayers] = await updatePlayer(uuid, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({ error: "Player not found" });
    }

    const updatedPlayer = updatedPlayers[0];
    res.json(updatedPlayer);
  })
);

export default router;
