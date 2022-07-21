import ILeader from '../interfaces/ILeader';
import IMatch from '../interfaces/IMatchs';
import Match from '../database/models/match';
import boardInitial from '../utils/boardInitial';

const matchResult = (golsHome: number, goalsAway: number) => {
  if (golsHome > goalsAway) {
    return { points: 3, win: 1, draw: 0, loss: 0 };
  }
  if (golsHome < goalsAway) {
    return { points: 0, win: 0, draw: 0, loss: 1 };
  }
  return { points: 1, win: 0, draw: 1, loss: 0 };
};

const getEfficiency = (points: number, games: number) => Number(
  ((points * 100) / games / 3).toFixed(2),
);

const calculateBoard = (acc: ILeader[], m: IMatch) => {
  const favor = (m.homeTeamGoals || 0);
  const own = (m.awayTeamGoals || 0);
  const game = matchResult(favor, own);
  const totalPoints = acc[m.homeTeam - 1].totalPoints + game.points;
  const totalGames = acc[m.homeTeam - 1].totalGames + 1;
  acc[m.homeTeam - 1] = {
    name: acc[m.homeTeam - 1].name,
    totalPoints,
    totalGames,
    totalVictories: acc[m.homeTeam - 1].totalVictories + game.win,
    totalDraws: acc[m.homeTeam - 1].totalDraws + game.draw,
    totalLosses: acc[m.homeTeam - 1].totalLosses + game.loss,
    goalsFavor: acc[m.homeTeam - 1].goalsFavor + favor,
    goalsOwn: acc[m.homeTeam - 1].goalsOwn + own,
    goalsBalance: acc[m.homeTeam - 1].goalsBalance + favor - own,
    efficiency: getEfficiency(totalPoints, totalGames),
  };
  return acc;
};

const sortByPoints = (a: ILeader, b: ILeader) => b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || b.goalsOwn - a.goalsOwn;

const home = async (): Promise<ILeader[]> => {
  const where = { inProgress: false };
  const matches = await Match.findAll({ where });
  const results = matches.reduce(calculateBoard, boardInitial);
  return results.sort(sortByPoints);
};

const leaderboard = {
  home,
};

export default leaderboard;
