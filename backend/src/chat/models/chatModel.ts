import { Schema, model, Document } from 'mongoose';

interface IChat extends Document {
    userMessage: string;
    botResponse: string;
    createdAt: Date;
}

const chatSchema = new Schema<IChat>({
    userMessage: { type: String, required: true },
    botResponse: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Chat = model<IChat>('Chat', chatSchema);

export default Chat;
