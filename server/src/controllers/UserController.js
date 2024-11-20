import UsersModel from '../models/UsersModel.js'

// crear usuario
export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const newUser = await UsersModel.create({ username, email, password })
        res.status(201).json({ message: "usuario creado con exito", newUser })
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(500).json({ error: error.message })
    }
}

// obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
        const users = UsersModel.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// obtener usuario por id
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UsersModel.findByPk(id)
        if (user){
            res.status(200).json(user)
        } 
        else {
            res.status(404).json({ error: 'usuario no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// actualizar usuario
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, password } = req.body
        const user = await UsersModel.findByPk(id)
        if (user) {
            user.username = username
            user.email = email
            user.password = password
            await user.save()
            res.status(200).json({ message: "usuario actualizado con exito", user})
        }
        else {
            res.status(404).json({ error: 'usuario no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// eliminar usuario
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UsersModel.findByPk(id)
        if (user) {
            await user.destroy()
            res.status(204).json({ message: 'usuario eliminado' })
        }
        else {
            res.status(404).json({ error: 'usuario no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}