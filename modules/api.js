const rp = require('request-promise');

const cornerstoneFPLLeague = {
  uri: 'https://fantasy.premierleague.com/api/leagues-classic/411339/standings',
  json: true,
}

async function getLeague() {
  let league = await rp(cornerstoneFPLLeague).then(league => {
    return league.standings.results;
  });
  return league;
}

module.exports.getLeague = getLeague;