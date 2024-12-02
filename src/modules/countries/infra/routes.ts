import { Router } from "express";
import { createCountry } from "../usecases/CreateCountry";
import { getAllCountries } from "../usecases/GetAllCountries";
import { updateCountryStatus } from "../usecases/UpdateCountryStatus";

const router = Router();

// Ruta para crear un país
router.post("/", async (req, res) => {
  const { name, status_uuid } = req.body;
  try {
    const country = await createCountry(name, status_uuid);
    res.status(201).json(country);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Ruta para obtener todos los países
router.get("/", async (req, res) => {
  try {
    const countries = await getAllCountries();
    res.json(countries);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Ruta para actualizar el estado de un país
router.put("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  const { status_uuid } = req.body;
  try {
    await updateCountryStatus(uuid, status_uuid);
    res.status(204).send();
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
