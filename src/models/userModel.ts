import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/sequelize";
import { UserAttributes, UserCreationAttributes } from "../types/userTypes";
import dotenv from "dotenv";

dotenv.config();

export const AccountModel = sequelize.define<
  Model<UserAttributes, UserCreationAttributes>
>('User',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email:{
    type:DataTypes.STRING(150),
    allowNull:false
  },
  password:{
    type:DataTypes.STRING(100),
    allowNull:false
  }
},{
  tableName: 'UserModel',
  timestamps: false
});