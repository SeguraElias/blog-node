import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('dbblog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export const getConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexion establecida con éxito')
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error)
    }
}

export default sequelize
