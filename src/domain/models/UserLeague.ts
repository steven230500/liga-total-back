import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class UserLeague extends Model {
  public uuid!: string;
  public user_uuid!: string;
  public league_uuid!: string;
  public status_uuid!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

UserLeague.init(
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
    league_uuid: {
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
    tableName: "user_leagues",
    timestamps: true,
  }
);
