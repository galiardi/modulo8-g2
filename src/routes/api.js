import { Router } from 'express';
import jewelsRouter from './jewels.router.js';

const router = Router();

router.use('/jewels', jewelsRouter);

export default router;
