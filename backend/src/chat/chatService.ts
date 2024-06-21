import axios from 'axios';
import Chat from './models/chatModel';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';

export const handleChat = async (userMessage: string): Promise<string> => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{role: 'user', content: userMessage}],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        const botResponse = response.data.choices[0].message.content;
        console.log(botResponse);
        return botResponse;

        // await Chat.create({ userMessage, botResponse });

        return botResponse;
    } catch (error: any) {
        console.error('Error in handleChat:', error.response?.data || error.message || error);
        throw new Error('Failed to process chat request');
    }
};
