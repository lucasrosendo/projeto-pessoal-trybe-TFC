import Team from '../database/models/team';
import ITeams from '../interfaces/ITeams';

const getTeams = async (): Promise<ITeams[]> => {
  const teams = await Team.findAll();
  return teams;
};

const teamsService = {
  getTeams,
};

export default teamsService;
