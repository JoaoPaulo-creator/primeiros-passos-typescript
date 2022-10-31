import morgan, {StreamOptions} from 'morgan'
import config from 'config'
import Logger from '../../config/logger'

// criando mensagens http

const stream: StreamOptions = {
    write: (message) => Logger.http(message)    
}


// criando variável skip, para que não seja necessário puxar as mensagens do morgan em prd
const skip = () =>{
    const env = config.get<string>('env') || 'development'
    return env !== 'development'    
}

const morganMiddleware = morgan(
    // criando um padrão de mensagem de retorno, para quando uma requisição ocorrer
    // a mensagem aparecerá no console do editor
    //metodo utilizado | url chamada | resposa | tempo de resposta em milisegundos
    ':method :url :res[content-length] - :response-time ms',
    { stream , skip}
)

export default morganMiddleware
