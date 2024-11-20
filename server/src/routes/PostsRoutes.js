import express from 'express'
import { createPost, updatePost, getPosts, getPostById, deletePost } from '../controllers/PostController.js'

const router = express.Router()

// crear un post
router.post('/posts', createPost)
// obtener todos los posts
router.get('/posts', getPosts)
// obtener post por id
router.get('/posts/:id', getPostById)
// actualizar post
router.put('/posts/:id', updatePost)
// eliminar post
router.delete('/posts/:id', deletePost)

export default router