import pool from "./db.js"

try{
    const [rows, fields] = await pool.execute("SELECT 1")
    console.log("Conexão OK: \n", rows,"\n",fields)
} catch(error){
    console.log("Erro ao conectar: ", erro)
}finally{
    await pool.end()
}