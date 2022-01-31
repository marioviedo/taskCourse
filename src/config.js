import { config as dotConfig } from "dotenv"
dotConfig()

export const configDB = {
    host:process.env.DB_HOST || 'localhost',
    user:process.env.DB_USER || 'root',
    password:process.env.DB_PASSWORD || '',
    database:process.env.DB_DATABASE || 'test'
}