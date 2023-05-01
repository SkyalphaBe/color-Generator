import express from 'express';
import { createServer } from 'http';
import api from './api';
import {connection} from './api/config/database';
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', api)

const server = createServer(app)
connection()
    .then(() => {
            server.listen('8080', () => {
                console.log('Listening on port 8080');
            });
        }
    )
    .catch((error) => console.error('DB Error', error))
