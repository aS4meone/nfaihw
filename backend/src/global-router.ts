import { Router } from 'express';
import chatRouter from "./chat/chatRouter";

const router = Router();

router.use('/chat', chatRouter);

export default router;
