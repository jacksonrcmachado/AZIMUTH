import mongosee from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongosee.connect(process.env.MONGODB_URI_LOCAL as string);
        console.log("✔️ MongoDB connected successfully!");
    } catch (error) {
        console.log("❌ Error connecting to MongoDB: ", error);
    }
};