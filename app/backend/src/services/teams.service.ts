import Team from '../database/models/team';
import ITeams from '../interfaces/ITeams';

const getTeams = async (): Promise<ITeams[]> => {
  const teams = await Team.findAll();
  return teams;
};

const getTeamsById = async ({ id }: ITeams): Promise<ITeams> => {
  const [team] = await Team.findAll({ where: { id } });
  return team;
};

const teamsService = {
  getTeams,
  getTeamsById,
};

export default teamsService;
