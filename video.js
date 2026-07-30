import {randomUUID} from "node:crypto"

export class video{
    
    #videos = new Map()

    create(video){
        const videoID = randomUUID()
        this.#videos.set(videoID ,video)
    }

    update(id, video){
        this.#videos.set(id, video)
    }

    delete(id){
        this.#videos.delete(id)
    }

    list(){
        return Array.from(this.#videos)
    }
    
    listById(id){
        return this.#videos.get(id)
    }


}