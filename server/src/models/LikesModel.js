import { DataTypes } from "sequelize"
import sequelize from "../database/connection.js"
import PostsModel from "./PostsModel.js"
import UsersModel from "./UsersModel.js"

const LikesModel = sequelize.define("likes", {})

LikesModel.belongsTo(PostsModel, { foreignKey: 'post_id' })
LikesModel.belongsTo(UsersModel, { foreignKey: 'user_id' })

export default LikesModel