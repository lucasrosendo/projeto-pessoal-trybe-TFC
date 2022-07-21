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

const inProgressMatch = async (data:object): Promise<IMatch> => {
  try {
    const matche = await match.create({ ...data, inProgress: true });
    return matche;
  } catch (err) {
    throw new Error('InvalidTeamID');
  }
};

const update = async (id: string): Promise<object> => {
  await match.update({ inProgress: false }, { where: { id } });
  return { message: 'Finished' };
};

const updateGoals = async (id: string, data:object): Promise<object> => {
  await match.update(data, { where: { id } });
  return { message: 'Finished' };
};

const matchService = {
  allMatchs,
  inProgressMatch,
  update,
  updateGoals,
};

export default matchService;
