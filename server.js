const express = require('express')
// const cors = require('cors')
const server = express();

const projectRouter = require('./routers/projectRouter')
const actionRouter = require('./routers/actionRouter')

server.use(express.json())
server.use(logger)

server.get('/', (req, res) => {
    res.send(`<h1>Take a look at my Node API Sprint Challenge!</h1>`)
})

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
}

module.exports = server;