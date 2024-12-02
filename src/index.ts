import dotenv from "dotenv";
import express from "express";
import sequelize from "../src/shared/config/database";

// Importar rutas
import countryRoutes from "../src/modules/countries/infra/routes";
import userRoutes from "../src/modules/users/infra/routes";
import teamRoutes from "../src/modules/teams/infra/routes";
import statusRoutes from "../src/modules/statuses/infra/routes";
import leagueRoutes from "../src/modules/leagues/infra/routes";
import positionRoutes from "../src/modules/positions/infra/routes";
import playerRoutes from "../src/modules/players/infra/routes";
import playerPositionRoutes from "../src/modules/playersPositions/infra/routes";
import userTeamRoutes from "../src/modules/userTeams/infra/routes";
import userLeagueRoutes from "../src/modules/userLeagues/infra/routes";
import authRoutes from "../src/modules/auth/infra/routes";

import { seedDatabase } from "../src/shared/utils/seedDatabase";
import pgtools from "pgtools";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware para JSON
app.use(express.json());

// Rutas
app.use("/api/countries", countryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/statuses", statusRoutes);
app.use("/api/leagues", leagueRoutes);
app.use("/api/positions", positionRoutes);
app.use("/api/players", playerRoutes); // Rutas para jugadores
app.use("/api/player-positions", playerPositionRoutes); // Rutas para posiciones de jugadores
app.use("/api/user-teams", userTeamRoutes); // Rutas para equipos de usuarios
app.use("/api/user-leagues", userLeagueRoutes); // Rutas para ligas de usuarios
app.use("/api/auth", authRoutes);

const checkAndCreateDatabase = async () => {
  const config = {
    user: process.env.DB_USER!,
    host: process.env.DB_HOST!,
    password: process.env.DB_PASSWORD!,
    port: parseInt(process.env.DB_PORT!, 10),
  };

  try {
    await pgtools.createdb(config, process.env.DB_NAME!);
    console.log(`✅ Database ${process.env.DB_NAME} created successfully.`);
  } catch (error: any) {
    if (error.name === "duplicate_database") {
      console.log(`⚠️ Database ${process.env.DB_NAME} already exists.`);
    } else {
      console.error("❌ Error creating database:", error.message);
      throw error;
    }
  }
};

// Conexión y servidor
const startServer = async () => {
  try {
    // Crear la base de datos si no existe
    await checkAndCreateDatabase();

    // Conectar a la base de datos
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");

    // Sincronizar las tablas
    await sequelize.sync({ alter: true });
    console.log("✅ Database tables synchronized successfully.");

    // Insertar datos de prueba
    await seedDatabase();
    console.log("✅ Database seeded successfully.");

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
};

startServer();
