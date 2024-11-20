import PostModel from '../models/PostsModel.js'
import UsersModel from '../models/UsersModel.js'

// crear un post
export const createPost = async (req, res) => {
    try {
        const { content, date, user_id } = req.body
        const newPost = await PostModel.create({ content, date, user_id })
        res.status(201).json({ message: "post creado con exito", newPost })
    } catch (error) {
        console.error('Error creating post:', error)
        res.status(500).json({ error: error.message })
    }
}

// obtener todos los posts
export const getPosts = async (req, res) => {
    try {
        const posts = PostModel.findAll({
            include: [{ model: UsersModel, attributes: ['username', 'email'] }]
        })
        res.status(200).json(posts)
    } catch (error) {
        console.error('Error getting posts:', error)
        res.status(500).json({ error: error.message })
    }
}

//obtener post por id
export const getPostById = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findByPk(id, {
            include: [{ model: UsersModel, attributes: ['username', 'email'] }]
        })
        if (post){
            res.status(200).json(post)
        }
        else {
            res.status(404).json({ error: 'post no encontrado' })
        }
    } catch (error) {
        console.error('Error getting post:', error)
        res.status(500).json({ error: error.message })
    }
}

// actualizar post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { content, date, user_id } = req.body
        const post = await PostModel.findByPk(id)
        if (post) {
            post.content = content
            post.date = date
            post.user_id = user_id
            await post.save()
            res.status(200).json({ message: "post actualizado con exito", post})
        }
        else{
            res.status(404).json({ error: 'post no encontrado' })
        }
    } catch (error) {
        console.error('Error updating post:', error)
        res.status(500).json({ error: error.message })
    }
}

// eliminar post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findByPk(id)
        if (post) {
            await post.destroy()
            res.status(204).json({ message: 'post eliminado' })
        }
        else {
            res.status(404).json({ error: 'post no encontrado' })
        }
    } catch (error) {
        console.error('Error deleting post:', error)
        res.status(500).json({ error: error.message })
    }
}
