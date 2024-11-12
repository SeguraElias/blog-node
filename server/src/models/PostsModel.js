import { DataTypes } from 'sequelize'
import sequelize from '../database/connection.js'
import UsersModel from './UsersModel.js'

const PostModel = sequelize.define('posts', {
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

PostModel.belongsTo(UsersModel, { foreignKey: 'user_id'})

export default PostModel