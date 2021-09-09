const rp = require('request-promise');
const config = require('../config.json');

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
  console.log(league);
  return league;
}

getLeague();

module.exports.getLeague = getLeague;