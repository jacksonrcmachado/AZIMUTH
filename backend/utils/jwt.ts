import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || "secret_key";

export const generateToken = (userId: string) => {
    return jwt.sign({ id: userId }, SECRET, { expiresIn: '1h' });
};

export const verfyToken = (token: string) => {
    return jwt.verify(token, SECRET);
};