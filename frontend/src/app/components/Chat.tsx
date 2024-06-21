'use client'
import { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [message, setMessage] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<{ userMessage: string; botResponse: string }[]>([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = message;
        setMessage('');

        try {
            const response = await axios.post('https://nfaihw.onrender.com/api/v1/chat', { message: userMessage });
            const botResponse = response.data.response;
            setChatHistory([...chatHistory, { userMessage, botResponse }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <div>
                {chatHistory.map((chat, index) => (
                    <div key={index}>
                        <p><strong>User:</strong> {chat.userMessage}</p>
                        <p><strong>Bot:</strong> {chat.botResponse}</p>
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
