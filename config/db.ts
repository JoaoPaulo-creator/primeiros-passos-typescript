import mongoose from "mongoose"
import config from "config"
import Logger from "./logger"

async function dataBaseConnection(){
    const dbUri = config.get<string>('dbUri')
    try {
        await mongoose.connect(dbUri)
        Logger.info('Conectado ao banco de dados')
    } catch (error) {
        Logger.error('Não foi possível conectar ao bando de dados')
        Logger.error(`Erro: ${error.message}`)
        // finanilizando a execução com o banco, caso dê um erro
        process.exit(1)
    }
}


export default dataBaseConnection;
