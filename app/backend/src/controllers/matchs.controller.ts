import { Request, Response, NextFunction } from 'express';
import matchService from '../services/matchs.service';

const matchs = async (req: Request, res: Response) => {
  const result = await matchService.allMatchs();
  return res.status(200).json(result);
};

const matcheInProgress = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const matche = await matchService.inProgressMatch(req.body);
    return res.status(201).json(matche);
  } catch (err) {
    next(err);
  }
};

const matcheUpdate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const match = await matchService.update(id);
    return res.status(200).json(match);
  } catch (error) {
    next(error);
  }
};

const matcheUpdateGoals = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const scoreBoard = req.body;
    const match = await matchService.updateGoals(id, scoreBoard);
    return res.status(200).json(match);
  } catch (error) {
    next(error);
  }
};

const matchController = {
  matchs,
  matcheInProgress,
  matcheUpdate,
  matcheUpdateGoals,
};

export default matchController;
