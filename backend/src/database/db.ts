import { Client } from 'ts-postgres'

const db = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'post',
    port: 5432,
    database: 'portal'
})



export = db;