import { Router, Request, Response } from "express";
import { asyncHandler } from "../../../shared/middlewares/asyncHandler";
import { createPlayerPosition } from "../usecases/CreatePlayerPosition";
import { getAllPlayerPositions } from "../usecases/GetAllPlayerPositions";
import { getPlayerPositionByUuid } from "../usecases/GetPlayerPositionByUuid";
import { updatePlayerPosition } from "../usecases/UpdatePlayerPosition";

const router = Router();

router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const playerPosition = await createPlayerPosition(req.body);
    res.status(201).json(playerPosition);
  })
);

router.get(
  "/",
  asyncHandler(async (_req: Request, res: Response) => {
    const playerPositions = await getAllPlayerPositions();
    res.json(playerPositions);
  })
);

router.get(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const playerPosition = await getPlayerPositionByUuid(uuid);
    res.json(playerPosition);
  })
);

router.put(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const [affectedRows, updatedPlayerPositions] = await updatePlayerPosition(
      uuid,
      req.body
    );

    if (affectedRows === 0) {
      return res.status(404).json({ error: "Player position not found" });
    }

    res.json(updatedPlayerPositions[0]);
  })
);

export default router;
