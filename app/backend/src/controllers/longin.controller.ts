import { Request, Response } from 'express';
import userService from '../services/user.service';

const login = async (req: Request, res: Response) => {
  const result = await userService.login(req.body);
  if (result.token) {
    return res.status(200).json(result);
  }
  const message = 'Incorrect email or password';
  return res.status(401).json({ message });
};

const validate = (req: Request, res: Response) => {
  const { role } = req.body;
  return res.status(200).json({ role });
};

const loginController = {
  login,
  validate,
};

export default loginController;
