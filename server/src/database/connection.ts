import  knex from 'knex';
import path from 'path';

//migrations - controlam a versão da base de dados

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'database.sqlite') //dirname retorna o directorio
    },
    useNullAsDefault: true,
});

export default db;