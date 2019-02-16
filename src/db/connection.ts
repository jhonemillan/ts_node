import { createConnection, Connection, ConnectionOptions } from 'typeorm'
import {postgres_config} from './ormconfig'

const postgresDB = async function(){

    try {
        const connection = await createConnection({
            type: "postgres",
            host: postgres_config.host,
            port: postgres_config.port,
            username: postgres_config.username,
            password: postgres_config.password,
            database: postgres_config.database,
            ssl: true,
            logging: true
        });        
        
        return connection;
    } catch (error) {
        
    }
}

export { postgresDB }

