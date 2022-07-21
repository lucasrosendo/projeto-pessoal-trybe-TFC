import ITeams from './ITeams';

interface IMatch {
  id?: number;
  homeTeam: number,
  homeTeamGoals?: number,
  awayTeam: number,
  awayTeamGoals?: number,
  inProgress?: boolean,
  teamHome?: ITeams,
  teamAway?: ITeams,
}

export default IMatch;
