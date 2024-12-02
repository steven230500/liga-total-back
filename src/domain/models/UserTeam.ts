import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class UserTeam extends Model {
  public uuid!: string;
  public user_uuid!: string;
  public team_uuid!: string;
  public status_uuid!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

UserTeam.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    team_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "user_teams",
    timestamps: true,
  }
);
