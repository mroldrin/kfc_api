import jsonServer from "json-server"
import cors from "cors"

const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
const middlewares = jsonServer.defaults()

const PORT = 4004

server.use(middlewares)
server.use(router)
server.use(cors())

server.listen(PORT, () => {
  console.log(`JSON Server API is running in ${PORT}`)
})