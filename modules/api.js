const config = require('../config.json');
const rp = require('request-promise');


//Sets URL to league variable
const leagueURL = {
  uri: config.url,
  json: true,
}

//Fetches specific league from API
async function getLeague() {
  return await rp(leagueURL);
}

module.exports.getLeague = getLeague;