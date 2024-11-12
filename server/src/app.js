import express from 'express'
import sequelize from './database/connection.js'
import UsersModel from './models/UsersModel.js'
import PostModel from './models/PostsModel.js'
import ComentsModel from './models/ComentsModel.js'
import LikesModel from './models/LikesModel.js'

sequelize.sync({ force: false })
    .then(() => {
        console.log('Modelos sincronizados con la base de datos')
    })
    .catch((error) => {
        console.error('Error al sincronizar los modelos con la base de datos:', error)
    })

const app = express()

export default app