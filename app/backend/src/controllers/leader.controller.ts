import { Request, Response } from 'express';
import leaderboard from '../services/leader.service';

const home = async (_req: Request, res: Response) => {
  const result = await leaderboard.home();
  return res.status(200).json(result);
};

const leaderController = {
  home,
};

export default leaderController;
