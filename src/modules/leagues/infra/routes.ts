import { Router, Request, Response } from "express";
import { asyncHandler } from "../../../shared/middlewares/asyncHandler";
import { createLeague } from "../usecases/CreateLeague";
import { getLeagues } from "../usecases/GetLeagues";
import { updateLeague } from "../usecases/UpdateLeague";

const router = Router();

router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const league = await createLeague(req.body);
    res.status(201).json(league);
  })
);

router.get(
  "/",
  asyncHandler(async (_req: Request, res: Response) => {
    const leagues = await getLeagues();
    res.json(leagues);
  })
);

router.put(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const [affectedRows, updatedLeagues] = await updateLeague(uuid, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({ error: "League not found" });
    }

    res.json(updatedLeagues[0]);
  })
);

export default router;
