import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Sucess connected to database'));