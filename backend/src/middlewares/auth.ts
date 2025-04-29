import { verfyToken } from "../../utils/jwt";


export const getUserFromToken = (authHeader?: string) => {

    if(!authHeader) return null

    const token = authHeader.replace('Bearer ', '');

    try {
        const decoded = verfyToken(token);
        return decoded;
    } catch (error) {
        return null;
    }
}