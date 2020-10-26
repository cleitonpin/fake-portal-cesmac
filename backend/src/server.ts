import 'reflect-metadata';
import './database/connect';
import express from 'express';
import routes from './routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(routes);

app.listen(3333, () => console.log('🔥 Server started at http://localhost:3333'));