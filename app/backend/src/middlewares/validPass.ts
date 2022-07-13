import { Request, Response, NextFunction } from 'express';

const validPass = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (body.password) {
    return next();
  }
  const message = 'All fields must be filled';
  return res.status(400).json({ message });
};

export default validPass;
