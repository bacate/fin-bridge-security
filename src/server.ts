import http, { createServer } from 'http'
import { app } from './app'

const server = createServer(app)

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})