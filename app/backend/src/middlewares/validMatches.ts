import { Request, Response, NextFunction } from 'express';

const validMatch = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (body.homeTeam < 17 && body.awayTeam < 17) {
    if (body.homeTeam !== body.awayTeam) {
      return next();
    }
    const message = 'It is not possible to create a match with two equal teams';
    return res.status(401).json({ message });
  }
  return res.status(404).json({
    message: 'There is no team with such id!',
  });
};

export default validMatch;
