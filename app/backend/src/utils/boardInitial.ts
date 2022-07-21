const emptyResults = {
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: 0,
};

const boardInitial = [
  { name: 'Avaí/Kindermann', ...emptyResults },
  { name: 'Bahia', ...emptyResults },
  { name: 'Botafogo', ...emptyResults },
  { name: 'Corinthians', ...emptyResults },
  { name: 'Cruzeiro', ...emptyResults },
  { name: 'Ferroviária', ...emptyResults },
  { name: 'Flamengo', ...emptyResults },
  { name: 'Grêmio', ...emptyResults },
  { name: 'Internacional', ...emptyResults },
  { name: 'Minas Brasília', ...emptyResults },
  { name: 'Napoli-SC', ...emptyResults },
  { name: 'Palmeiras', ...emptyResults },
  { name: 'Real Brasília', ...emptyResults },
  { name: 'Santos', ...emptyResults },
  { name: 'São José-SP', ...emptyResults },
  { name: 'São Paulo', ...emptyResults },
];

export default boardInitial;
