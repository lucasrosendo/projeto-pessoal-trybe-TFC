import { Request, Response, NextFunction } from 'express';

const validEmail = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (body.email) {
    return next();
  }
  const message = 'All fields must be filled';
  return res.status(400).json({ message });
};

export default validEmail;
