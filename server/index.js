const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')

const app = express()

const port =4005

app.use(express.json())
app.use(cors())

// Endpoints

app.get('/api/movies', ctrl.getAllMovies)
app.delete('/api/movies/:id', ctrl.deleteMovie)
app.post('/api/movies', ctrl.createMoive)
app.put('/api/movies/:id', ctrl.updateMovie)

app.listen(port, () => console.log(`Avengers Assemble on port ${port}`))