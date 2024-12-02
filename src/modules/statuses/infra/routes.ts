import { Router } from "express";
import { createStatus } from "../usecases/CreateStatus";
import { getAllStatuses } from "../usecases/GetAllStatuses";
import { getStatusById } from "../usecases/GetStatusById";

const router = Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const status = await createStatus(name);
    res.status(201).json(status);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.get("/", async (req, res) => {
  try {
    const statuses = await getAllStatuses();
    res.json(statuses);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.get("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  try {
    const status = await getStatusById(uuid);
    res.json(status);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
});

export default router;
