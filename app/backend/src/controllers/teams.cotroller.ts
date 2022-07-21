import { Request, Response } from 'express';
import teamsService from '../services/teams.service';

const teams = async (req: Request, res: Response) => {
  const result = await teamsService.getTeams();
  return res.status(200).json(result);
};

const teamsController = {
  teams,
};

export default teamsController;
