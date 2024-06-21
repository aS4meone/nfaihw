import { Router } from 'express';
import { chat } from './chatController';

const chatRouter = Router();

chatRouter.post('/', chat);

export default chatRouter;
