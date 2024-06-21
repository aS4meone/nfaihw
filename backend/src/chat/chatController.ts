import { Request, Response } from 'express';
import { handleChat } from './chatService';

export const chat = async (req: Request, res: Response): Promise<void> => {
    const { message } = req.body;

    if (!message) {
        res.status(400).json({ error: 'Message is required' });
        return;
    }

    try {
        const response = await handleChat(message);
        res.json({ response });
    } catch (error) {
        console.error('Error in chat controller:', error);
        res.status(500).json({ error: 'Failed to get response from OpenAI' });
    }
};
