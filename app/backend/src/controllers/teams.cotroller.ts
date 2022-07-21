import { Request, Response } from 'express';
import teamsService from '../services/teams.service';

const teams = async (req: Request, res: Response) => {
  const result = await teamsService.getTeams();
  return res.status(200).json(result);
};

const teamsId = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const result = await teamsService.getTeamsById({ id });
  return res.status(200).json(result);
};

const teamsController = {
  teams,
  teamsId,
};

export default teamsController;

// como transformar string em number:
// https://stackoverflow.com/questions/14667713/how-to-convert-a-string-to-number-in-typescript
