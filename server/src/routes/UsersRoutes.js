import express from 'express'
import { createUser, updateUser, getUsers, getUserById, deleteUser } from '../controllers/UserController.js'

const router = express.Router()

// crear usuario
router.post('/users', createUser)
// obtener todos los usuarios
router.get('/users', getUsers)
// obtener usuario por id 
router.get('/users/:id', getUserById)
// actualizar usuario 
router.put('/users/:id', updateUser)
// eliminar usuario
router.delete('/users/:id', deleteUser)

export default router