import { DataTypes } from "sequelize"
import sequelize from "../database/connection.js"
import PostsModel from "./PostsModel.js"
import UsersModel from "./UsersModel.js"
import PostModel from "./PostsModel.js"

const ComentsModel = sequelize.define("coments", {
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

ComentsModel.belongsTo(PostModel, { foreignKey: 'post_id' })
ComentsModel.belongsTo(UsersModel, { foreignKey: 'user_id' })

export default ComentsModel