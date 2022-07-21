import { Request, Response } from 'express';
import matchService from '../services/matchs.service';

const matchs = async (req: Request, res: Response) => {
  const result = await matchService.allMatchs();
  return res.status(200).json(result);
};

const matchController = {
  matchs,
};

export default matchController;
