require('dotenv').config()

const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS

export default {
    port: 3000,    
    dbUri: `mongodb+srv://${db_user}:${db_pass}@api-typescript.ljvrh7c.mongodb.net/?retryWrites=true&w=majority`,
    env: 'development'
}
