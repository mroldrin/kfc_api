import jsonServer from "json-server"
import cors from "cors"
import * as url from 'url';
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname,"..","db","db.json"))
const middlewares = jsonServer.defaults()

const PORT = 4004

server.use(middlewares)
server.use(router)
server.use(cors())

server.listen(PORT, () => {
  console.log(`JSON Server API is running in ${PORT}`)
})