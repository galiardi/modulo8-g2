import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import api from './routes/api.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/v1/', api);

export default app;
