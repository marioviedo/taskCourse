import express from "express";
import taskrouter from "./routes/tasks";

import cors from "cors";
import morgan from "morgan";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import { options } from "./swaggerOptions";

const app = express();
const specs = swaggerJSDoc(options)

app.use(cors());
app.use(morgan("dev"))

app.use(express.json());
app.use(taskrouter);

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

export default app