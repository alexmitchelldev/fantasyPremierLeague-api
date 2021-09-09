class fplLeague {
    constructor (league) {
        this._league = league;
        this._negativeQuotes = [
            `The fans are singing - 'He's getting sacked in the morning'. ${this.lowestManagerThisWeek} is under serious pressure here.`,
            `The ${this.randomPaper} has reported ${this.lowestManagerThisWeek} was partying all weekend and missed last ${this.randomWeekday}'s training, the players aren't happy.`,
            `${this.lowestManagerThisWeek} must've been taking a page out of Wayne Rooney's book, ${this.lowestTeamThisWeek}'s reputation has been severly damaged.`,
            `Riots have continued outside the stadium this week after ${this.lowestTeamThisWeek}'s poor performance, fans are urging ${this.lowestManagerThisWeek} to resign and retain a shred of decency.`
        ];
        this._positiveQuotes = [
            `The fans have been chanting 'Theres only one ${this.highestManagerThisWeek}, theres only one ${this.highestManagerThisWeek}' all week, and rightly so after this week's performance.`,
            `${this.highestTeamThisWeek}'s performance this week has led to a 20% surge in ticket and shop sales, all thanks to ${this.highestManagerThisWeek}`
        ];
    }

    generateLeagueTable () {
        let result = [];

        for (const team of this._league) {
            result.push([team.rank, team.entry_name, team.total]);
        }

        return result;
    }

    highestTotal (input) {
        switch (input) {
            case 'manager':
                return  this._league[0].player_name;
            case 'team':
                return this._league[0].entry_name;
            case 'score':
                return this._league[0].total;
        }
    }

    lowestTotal (input) {
        switch (input) {
            case 'manager':
                return  this._league[this._league.length - 1].player_name;
            case 'team':
                return this._league[this._league.length - 1].entry_name;
            case 'score':
                return this._league[this._league.length - 1].total;
        }
    }
    
    highestThisWeek (input) {
        let weekScore = 0;
        switch (input) {
            case 'manager':
                let manager;
                for (const team of this._league) {
                    if (team.event_total > weekScore) {
                        weekScore   = team.event_total;
                        manager     = team.player_name;
                    }
                }
                return manager;
            case 'team':
                let club = ''; 
                for (const team of this._league) {
                    if (team.event_total > weekScore) {
                        weekScore = team.event_total;
                        club  = team.entry_name;
                    }
                }
                return club;
            case 'score':
                let score = 0;
                for (const team of this._league) {
                    if (team.event_total > score) {
                        score = team.event_total;
                    }
                }
                return score;

        }
    }

    lowestThisWeek (input) {
        let weekScore = 1000;
        switch (input) {
            case 'manager':
                let manager;
                for (const team of this._league) {
                    if (team.event_total < weekScore) {
                        weekScore   = team.event_total;
                        manager     = team.player_name;
                    }
                }
                return manager;
            case 'team':
                let club;
                for (const team of this._league) {
                    if (team.event_total < weekScore) {
                        weekScore   = team.event_total;
                        club        = team.entry_name;
                    }
                }
                return club;
            case 'score':
                let score = 1000;
                for (const team of this._league) {
                    if (team.event_total < score) {
                        score = team.event_total;
                    }
                }
                return score;
        }
    }

    generateRandomQuote (quotes) {
        let randomQuote = Math.floor(Math.random() * quotes.length);
        switch (quotes) {
            case this._negativeQuotes:
                return this._negativeQuotes[randomQuote];
            case this._positiveQuotes:
                return this._positiveQuotes[randomQuote];
        }
    }

    generateRandomWeekday () {
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        let randomWeekday = Math.floor(Math.random() * weekdays.length);
        return weekdays[randomWeekday];
    }

    generateRandomPaper () {
        const papers = [`Sun`, `Daily Mirror`, `Daily Star`, `Sunday Mirror`, `Weekend Sport`];
        let randomPaper = Math.floor(Math.random() * papers.length);
        return papers[randomPaper];
    }

    generateSpaces (input) {
        let spaces = '';

        for (let i = 0; i < input; i++) {
            spaces += ' ';
        }
        return spaces;
    }

    get leagueTable () {
        const leagueTable = this.generateLeagueTable();
        let formattedLeagueTable = 'League Table\n--------------------------------------------\n';
        for (const team of leagueTable) {
            leagueTable.indexOf(team) < 9 ? formattedLeagueTable += `${team[0]}   | ${team[1]}${this.generateSpaces(21 - team[1].length)}| ${team[2]}\n` : formattedLeagueTable += `${team[0]} | ${team[1]}${this.generateSpaces(20 - team[1].length)} | ${team[2]}\n`;
        }

        return formattedLeagueTable;
    }

    get highestManagerTotal () {
        return this.highestTotal('manager');
    }

    get highestTeamTotal () {
        return this.highestTotal('team');
    }

    get highestScoreTotal () {
        return this.highestTotal('score');
    }
    
    get lowestManagerTotal () {
        return this.lowestTotal('manager');
    }

    get lowestTeamTotal () {
        return this.lowestTotal('team');
    }

    get lowestScoreTotal () {
        return this.lowestTotal('score');
    }

    get highestManagerThisWeek () {
        return this.highestThisWeek('manager');
    }

    get highestTeamThisWeek () {
        return this.highestThisWeek('team');
    }

    get highestScoreThisWeek () {
        return this.highestThisWeek('score');
    }

    get lowestManagerThisWeek () {
        return this.lowestThisWeek('manager');
    }

    get lowestTeamThisWeek () {
        return this.lowestThisWeek('team');
    }

    get lowestScoreThisWeek () {
        return this.lowestThisWeek('score');
    }

    get randomPositiveQuote () {
        return this.generateRandomQuote(this._positiveQuotes);
    }

    get randomNegativeQuote () {
        return this.generateRandomQuote(this._negativeQuotes);
    }

    get randomWeekday () {
        return this.generateRandomWeekday();
    }

    get randomPaper () {
        return this.generateRandomPaper();
    }

    
}

module.exports.fplLeague = fplLeague;