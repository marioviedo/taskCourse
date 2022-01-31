import { Router } from "express";
import { createTask, deleteTask, getTask, getTaskCount, getTasks, updateTask } from "../controllers/tasksController";

const taskrouter = Router();

/**
 * @swagger
 * tags:
 *  name: Tareas
 *  description: EndPoints para el CRUD de tareas
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Obtiene todas las tareas
 *      tags: [Tareas]
 */
taskrouter.get('/tasks', getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Obtiene un conteo de todas las tareas
 *      tags: [Tareas]
 */
taskrouter.get('/tasks/count', getTaskCount);
/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Obtiene la informacion de una sola tarea
 *      tags: [Tareas]
 */
taskrouter.get('/tasks/:id', getTask);
/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Guarda una nueva tarea en base de datos
 *      tags: [Tareas]
 */
taskrouter.post('/tasks', createTask);
/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: Elimina una tarea de la base de datos
 *      tags: [Tareas]
 */
taskrouter.delete('/tasks/:id', deleteTask);
/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: Actualiza una tarea en la base de datos con informacion nueva
 *      tags: [Tareas]
 */
taskrouter.put('/tasks/:id', updateTask);

export default taskrouter
