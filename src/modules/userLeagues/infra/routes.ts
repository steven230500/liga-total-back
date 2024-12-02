import { Router, Request, Response } from "express";
import { asyncHandler } from "../../../shared/middlewares/asyncHandler";
import { createUserLeague } from "../usecases/CreateUserLeague";
import { getAllUserLeagues } from "../usecases/GetAllUserLeagues";
import { getUserLeagueByUuid } from "../usecases/GetUserLeagueByUuid";
import { updateUserLeague } from "../usecases/UpdateUserLeague";

const router = Router();

router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const userLeague = await createUserLeague(req.body);
    res.status(201).json(userLeague);
  })
);

router.get(
  "/",
  asyncHandler(async (_req: Request, res: Response) => {
    const userLeagues = await getAllUserLeagues();
    res.json(userLeagues);
  })
);

router.get(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const userLeague = await getUserLeagueByUuid(uuid);
    res.json(userLeague);
  })
);

router.put(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const [affectedRows, updatedUserLeagues] = await updateUserLeague(
      uuid,
      req.body
    );

    if (affectedRows === 0) {
      return res.status(404).json({ error: "User league not found" });
    }

    res.json(updatedUserLeagues[0]);
  })
);

export default router;
