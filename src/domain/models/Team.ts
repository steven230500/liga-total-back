import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class Team extends Model {
  public uuid!: string;
  public name!: string;
  public city!: string;
  public budget!: number;
  public motto!: string;
  public status_uuid!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Team.init(
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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    motto: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: "teams",
    timestamps: true,
  }
);
