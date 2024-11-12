import { DataTypes } from 'sequelize'
import sequelize from '../database/connection.js'

const UsersModel = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default UsersModel