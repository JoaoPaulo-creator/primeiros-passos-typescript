// criando configuração de logs

import winston from "winston"
import config from "config"



//criando um objeto com níveis de log

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const level = () => {
    const env = config.get<string>('env') || 'development'
    const isDevelopment =  env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}


const colours = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
}

winston.addColors(colours)


// configurando como serão exibidas as mensagens de log
const format = winston.format.combine(
    winston.format.timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.colorize({all: true}),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level}: ${info.message}`
    )
)

// criando um arquivo com os erros

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        // criando um arquivo somente com os erros
        filename: 'logs/error.log',
        level: 'error'
    }),
    new winston.transports.File({
        // ou criando um arquivo geralzão, pra guardar todos os logs
        filename: 'logs/all.log'
    })
]

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
})

export default Logger

