const config = require('../config.json');
const rp = require('request-promise');


//Sets URL to league variable
const leagueURL = {
  uri: config.url,
  json: true,
}

//Fetches specific league from API
async function getLeague() {
  let league = await rp(leagueURL).then(league => {
    return league.standings.results;
  });
  return league;
}

module.exports.getLeague = getLeague;