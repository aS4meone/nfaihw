import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './db';
import globalRouter from './global-router';
import {logger} from './logger';

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(logger);
app.use(express.json());

app.use(cors());

app.use('/api/v1/', globalRouter);

app.listen(PORT, () => {
    console.log(`Server runs at http://localhost:${PORT}`);
});
