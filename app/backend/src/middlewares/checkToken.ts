import jwt = require('jsonwebtoken');
import { NextFunction, Request, Response } from 'express';

const { JWT_SECRET } = process.env;
const jSecret = JWT_SECRET as string;

const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, jSecret) as jwt.JwtPayload;
    req.body.role = decoded.data.role;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default checkToken;
