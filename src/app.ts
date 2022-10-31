import express from "express"
import config from "config"
import router from './router'
import dataBaseConnection from "../config/db";
import Logger from '../config/logger'


const app = express()
app.use(express.json())


// adicionando um prefixo de url
app.use('/api', router)
const port = config.get<number>('port')


app.listen(port, async() =>{
    await dataBaseConnection()
    Logger.info(`Server rodando na porta: ${port}`)
})