import match from '../database/models/match';
import Team from '../database/models/team';
import IMatch from '../interfaces/IMatchs';

const allMatchs = async (): Promise<IMatch[]> => {
  const Matches = await match.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return Matches;
};

const matchService = {
  allMatchs,
};

export default matchService;
