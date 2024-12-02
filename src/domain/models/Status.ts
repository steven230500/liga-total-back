import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class Status extends Model {
  public uuid!: string;
  public name!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Status.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    tableName: "statuses",
    timestamps: true,
  }
);
