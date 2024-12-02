import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class Position extends Model {
  public uuid!: string;
  public name!: string;
  public status_uuid!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Position.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
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
    tableName: "positions",
    timestamps: true,
  }
);
