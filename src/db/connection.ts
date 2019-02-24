import { createConnection, Connection, ConnectionOptions } from 'typeorm'
import {postgres_config} from './ormconfig'
import { tablestoinclude } from './tablestoinclude';

const postgresDB = async function(){

    try {
        console.log('connection');
        const connection = await createConnection({
            name: 'default',
            type: "postgres",
            host: postgres_config.host,
            port: postgres_config.port,
            username: postgres_config.username,
            password: postgres_config.password,
            database: postgres_config.database,
            ssl: false,
            logging: true,
            entities: tablestoinclude
        });        
        return connection;
    } catch (error) {
        console.log(error);
    }
}

export { postgresDB }

