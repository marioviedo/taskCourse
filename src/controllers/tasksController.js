import { connect } from "../database";

export const getTasks = async(req, res) =>{
    const dbConnection = await connect()
    const [response] = await dbConnection.query('SELECT * FROM tasks')    
    res.json(response)
}

export const getTaskCount = async (req, res)=>{
    const dbConnection = await connect()
    const [response] = await dbConnection.query('SELECT count(*) as count FROM tasks')  
    res.json(response[0])
}

export const getTask = async (req, res) => {
    const idTask = [req.params.id]
    const dbConnection = await connect()
    const [response] = await dbConnection.query("SELECT * FROM tasks WHERE id=?",idTask)
    res.json(response[0])
}

export const createTask = async (req, res) => {
    const arrayUpdateData = [req.body.title, req.body.description, req.params.id]
    const dbConnection = await connect()
    const [response] = await dbConnection.query("INSERT INTO tasks(title, description) VALUES(?, ?)", arrayUpdateData)
    
    res.json(response)
}

export const deleteTask = async (req, res) => {
    const idTask = [req.params.id]
    const dbConnection = await connect()
    const [response] = await dbConnection.query("DELETE FROM tasks WHERE id=?", idTask)
    res.json(response)
}

export const updateTask = async (req, res) => {    
    const arrayUpdateData = [req.body.title, req.body.description, req.params.id]
    const dbConnection = await connect()
    const [response] = await dbConnection.query("UPDATE tasks SET title=?, description=? WHERE id=?", arrayUpdateData)
    res.json(response)
}