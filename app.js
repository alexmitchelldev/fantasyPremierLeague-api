const getLeague     = require('./modules/api').getLeague;
const fplLeague     = require('./modules/league').fplLeague;
const sendEmail     = require('./modules/email').sendEmail;

getLeague()
    .then((fplLeagueAPICall) => {
        return fplLeagueAPICall;
    }).catch((err) => {
        console.log(`FPI API Call failed:\n${err}`);
    }).then((returnedLeague) => {
        const league        = new fplLeague(returnedLeague);
        const negativeQuote = league.randomNegativeQuote;
        const positiveQuote = league.randomPositiveQuote;
        const emailBody     = (`${league.leagueTable}\n${negativeQuote}\n\n${positiveQuote}`);
        console.log(emailBody);
        return emailBody;
    }).catch((err) => {
        console.log(`Failed to get league:\n${err}`);
    })