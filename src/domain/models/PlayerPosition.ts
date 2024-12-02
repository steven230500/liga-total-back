import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class PlayerPosition extends Model {
  public uuid!: string;
  public player_uuid!: string;
  public position_uuid!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

PlayerPosition.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    player_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    position_uuid: {
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
    tableName: "player_positions",
    timestamps: true,
  }
);
