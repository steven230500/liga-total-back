import { Router } from "express";
import { createUser } from "../usecases/CreateUser";
import { getUserById, getAllUsers } from "../usecases/GetUser";
import { updateUserStatus } from "../usecases/UpdateUserStatus";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, password, country_uuid, status_uuid } = req.body;
    const user = await createUser(
      name,
      email,
      password,
      country_uuid,
      status_uuid
    );
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const user = await getUserById(uuid);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:uuid/status", async (req, res) => {
  try {
    const { uuid } = req.params;
    const { status_uuid } = req.body;
    await updateUserStatus(uuid, status_uuid);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  try {
    const user = await getUserById(uuid);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
});

export default router;
