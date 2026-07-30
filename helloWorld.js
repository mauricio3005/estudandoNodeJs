import { fastify } from "fastify"
import { video } from "./video.js"

const server = fastify()

server.listen({
    port : 3333,
})

const database = new video()

server.get("/getVideo/:id", (request, reply) => {
  const id = request.params.id

  return database.listById(id)
})

server.get("/todosOsVideos", (request, reply)=> {
    const videos = database.list()

    return videos;
})

server.post("/create", (request, reply) => {
    const body = request.body

    database.create(body)

    console.log(body)

    return reply.status(201).send
})

server.delete("/deleteVideo/:id", (request,reply) =>{
    const videoID = request.params.id

    database.delete(videoID)

    return reply.status(200).send()
})

server.put("/updateVideo/:id",(request,reply)=> {
    const videoID = request.params.id
    const video = request.body

    database.update(videoID, video)

    return reply.status(200).send()
})