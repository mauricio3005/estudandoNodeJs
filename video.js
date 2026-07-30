import { randomUUID } from "node:crypto"
  import pool from "./db.js"

  export class video {

      async create(video) {
          const videoID = randomUUID()
          await pool.execute(
              "INSERT INTO videos (id, title, description, duration) VALUES (?, ?, ?, ?)",
              [videoID, video.title, video.description, video.duration]
          )
          return videoID
      }

      async update(id, video) {
          await pool.execute(
              "UPDATE videos SET title = ?, description = ?, duration = ? WHERE id = ?",
              [video.title, video.description, video.duration, id]
          )
      }

      async delete(id) {
          await pool.execute(
              "DELETE FROM videos WHERE id = ?",
              [id]
          )
      }

      async list() {
          const [rows] = await pool.execute("SELECT * FROM videos")
          return rows
      }

      async listById(id) {
          const [rows] = await pool.execute(
              "SELECT * FROM videos WHERE id = ?",
              [id]
          )
          return rows[0]
      }

  }