const express = require('express')
const cors = require('cors')
const database = require('./config/database')
const UserApi = require('./api/user')
const UserRouter = require('./routes/user')
const ProjectRouter = require('./routes/project')
const TaskRouter = require('./routes/task')
const authMiddleware = require('./middleware/authMiddleware')

const app = express()
app.use(express.json());

//Set use cors
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})

// Rotas sem token
app.post('/api/v1/login', UserApi.login)
app.post('/api/v1/user', UserApi.criarUsuario)

// Rotas com token
app.use('/api/v1/user', authMiddleware.validartoken)
app.use('/api/v1/user', UserRouter)
app.use('/api/v1/project', ProjectRouter)
app.use('/api/v1/task', TaskRouter)

database.sync({ force: true })
    .then(_ => {
        if (process.env.NODE_ENV !== 'test' ) {
            app.listen(8000, _ => {
                console.log('Server running on port 8000')
            })
        }
    })
    .catch(e => {
        console.error(`Erro ao inicializar o banco de dados ${e}`)
    })

    module.exports = app