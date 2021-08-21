import * as express from 'express';
import todoRouter from './todo';

const router = express.Router();

router.use('/todos/', todoRouter);

export const routes = router;