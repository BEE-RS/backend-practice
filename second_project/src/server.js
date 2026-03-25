import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import auth_routes from './routes/auth_routes.js'
import todo_routes from './routes/todo_routes.js'
import auth_middleware from './middleware/auth_middleware.js'

const app = express()
const PORT = process.env.PORT || 8756

// creates a path
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Routes
app.use('/auth', auth_routes)
app.use('/todos', auth_middleware, todo_routes)

app.listen(PORT, () =>{
    console.log(`Server has started on port: ${PORT}`)
})