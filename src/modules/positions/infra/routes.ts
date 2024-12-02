import { Router, Request, Response } from "express";
import { asyncHandler } from "../../../shared/middlewares/asyncHandler";
import { createPosition } from "../usecases/CreatePosition";
import { getAllPositions } from "../usecases/GetAllPositions";
import { getPositionByUuid } from "../usecases/GetPositionByUuid";
import { updatePosition } from "../usecases/UpdatePosition";

const router = Router();

// Crear una nueva posición
router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const position = await createPosition(req.body);
    res.status(201).json(position);
  })
);

// Obtener todas las posiciones
router.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const positions = await getAllPositions();
    res.json(positions);
  })
);

// Obtener una posición por UUID
router.get(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const position = await getPositionByUuid(uuid);
    res.json(position);
  })
);

// Actualizar una posición por UUID
router.put(
  "/:uuid",
  asyncHandler(async (req: Request<{ uuid: string }>, res: Response) => {
    const { uuid } = req.params;
    const [affectedRows, updatedPositions] = await updatePosition(
      uuid,
      req.body
    );

    if (affectedRows === 0) {
      return res.status(404).json({ error: "Position not found" });
    }

    res.json(updatedPositions[0]);
  })
);

export default router;
