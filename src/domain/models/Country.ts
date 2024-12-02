import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class Country extends Model {
  public uuid!: string;
  public name!: string;
  public status_uuid!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Country.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Country name cannot be empty" },
      },
    },
    status_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Status UUID cannot be empty" },
      },
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
    tableName: "countries",
    timestamps: true,
    paranoid: true,
  }
);
