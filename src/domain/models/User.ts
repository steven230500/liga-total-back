import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class User extends Model {
  public uuid!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public is_verified!: boolean;
  public verification_token!: string | null;
  public reset_password_token!: string | null;
  public reset_password_expires!: Date | null;
  public status_uuid!: string;
  public country_uuid!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    verification_token: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: null,
    },
    reset_password_token: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: null,
    },
    reset_password_expires: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    status_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    country_uuid: {
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
    tableName: "users",
    timestamps: true,
  }
);
