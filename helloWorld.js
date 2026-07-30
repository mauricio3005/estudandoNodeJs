import { fastify } from "fastify"
import { video } from "./video.js"

const server = fastify()

server.listen({
    port : 3333,
})

const database = new video()

server.get("/getVideo/:id", async (request, reply) => {
  const id = request.params.id

  return await database.listById(id)
})

server.get("/todosOsVideos", async (request, reply)=> {
    const videos = await database.list()

    return videos;
})

server.post("/create", async (request, reply) => {
    const body = request.body

    await database.create(body)

    console.log(body)

    return reply.status(201).send()
})

server.delete("/deleteVideo/:id", async (request,reply) =>{
    const videoID = request.params.id

    await database.delete(videoID)

    return reply.status(200).send()
})

server.put("/updateVideo/:id", async (request,reply)=> {
    const videoID = request.params.id
    const video = request.body

    await database.update(videoID, video)

    return reply.status(200).send()
})