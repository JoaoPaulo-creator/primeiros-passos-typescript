import express from "express"
import config from "config"
import router from './router'
import dataBaseConnection from "../config/db";
import Logger from '../config/logger'
import morganMiddleware from "./middleware/morganMiddleware";

const app = express()
app.use(express.json())

// utilizando um middleware
app.use(morganMiddleware)
// adicionando um prefixo de url
app.use('/api', router)
const port = config.get<number>('port')

app.listen(port, async() =>{
    await dataBaseConnection()
    Logger.info(`Server rodando na porta: ${port}`)
})