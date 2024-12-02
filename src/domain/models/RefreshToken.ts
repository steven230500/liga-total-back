import { Model, DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

export class RefreshToken extends Model {
  public uuid!: string;
  public user_uuid!: string;
  public token!: string;
  public expires!: Date;
  public created_at!: Date;
  public updated_at!: Date;
}

RefreshToken.init(
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
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expires: {
      type: DataTypes.DATE,
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
    tableName: "refresh_tokens",
    timestamps: true,
  }
);
