import jwt, { decode } from 'jsonwebtoken';
import config from 'config';
import User from './models/user';
import mongoose from 'mongoose';

export function auth(req: any, res: any, next: any) {
    // get the token from the header if present
    const token = req.headers["x-access-token"] || req.headers.authorization;
    // if no token found, return response (without going to the next middelware)
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    try {
        // if can verify the token, set req.user and pass to next middleware
        const decoded: any = jwt.verify(token, config.get("secretKey"));

        User.findById(decoded._id, (err, user) => {
            console.log(user);
            if (err || !user) {
                return res.status(401).end('User not found');
            }

            req.currentUser = user;
            next();
        });

    } catch (ex) {
        // if invalid token
        return res.status(400).send("Invalid token.");
    }
};