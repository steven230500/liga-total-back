import sequelize from "../config/database";
import { Country } from "../../domain/models/Country";
import { Team } from "../../domain/models/Team";
import { User } from "../../domain/models/User";
import { Status } from "../../domain/models/Status";
import { League } from "../../domain/models/League";
import { Position } from "../../domain/models/Position";
import { PlayerPosition } from "../../domain/models/PlayerPosition";
import { UserTeam } from "../../domain/models/UserTeam";

// Importar datos desde JSON
import countriesData from "./seeds/countries.json";
import teamsData from "./seeds/teams.json";
import usersData from "./seeds/users.json";
import leaguesData from "./seeds/leagues.json";
import statusesData from "../../shared/utils/seeds/statuses.json";
import positionsData from "./seeds/positions.json";
import playersPositionsData from "./seeds/player_positions.json";
import userTeamsData from "./seeds/user_teams.json";

export const seedDatabase = async () => {
  try {
    console.log("🌱 Starting to seed database...");

    await Status.bulkCreate(statusesData, { ignoreDuplicates: true });

    // Seed countries
    await Country.bulkCreate(countriesData, { ignoreDuplicates: true });

    // Seed teams
    await Team.bulkCreate(teamsData, { ignoreDuplicates: true });

    // Seed users
    await User.bulkCreate(usersData, { ignoreDuplicates: true });

    // Seed leagues
    await League.bulkCreate(leaguesData, { ignoreDuplicates: true });

    // Seed positions
    await Position.bulkCreate(positionsData, { ignoreDuplicates: true });

    // Seed player positions
    await PlayerPosition.bulkCreate(playersPositionsData, {
      ignoreDuplicates: true,
    });

    // Seed user teams
    await UserTeam.bulkCreate(userTeamsData, { ignoreDuplicates: true });

    console.log("✅ Database seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};
