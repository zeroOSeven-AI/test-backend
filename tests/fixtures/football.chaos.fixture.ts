// tests/fixtures/football.chaos.fixture.ts
export const nuclearChaosFixture = {
    "get": "fixtures",
    "parameters": {
        "league": "39",
        "season": "2023",
        "from": "2023-08-11",
        "to": "2023-08-20"
    },
    "errors": [],
    "results": 18,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "fixture": {
                "id": 1035037,
                "referee": "C. Pawson",
                "timezone": "UTC",
                "date": "2023-08-11T19:00:00+00:00",
                "timestamp": 1691780400,
                "periods": { "first": 1691780400, "second": 1691784000 },
                "venue": { "id": 512, "name": "Turf Moor", "city": "Burnley" },
                "status": { "long": "Match Finished", "short": "FT", "elapsed": 90, "extra": null }
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                "season": 2023,
                "round": "Regular Season - 1",
                "standings": true
            },
            "teams": {
                "home": { "id": 44, "name": "Burnley", "logo": "https://media.api-sports.io/football/teams/44.png", "winner": false },
                "away": { "id": 50, "name": "Manchester City", "logo": "https://media.api-sports.io/football/teams/50.png", "winner": true }
            },
            "goals": { "home": 0, "away": 3 },
            "score": {
                "halftime": { "home": 0, "away": 2 },
                "fulltime": { "home": 0, "away": 3 },
                "extratime": { "home": null, "away": null },
                "penalty": { "home": null, "away": null }
            }
        },
        {
            "fixture": {
                "id": 1035038,
                "referee": "M. Oliver",
                "timezone": "UTC",
                "date": "2023-08-12T11:30:00+00:00",
                "timestamp": 1691839800,
                "periods": { "first": 1691839800, "second": 1691843400 },
                "venue": { "id": 494, "name": "Emirates Stadium", "city": "London" },
                "status": { "long": "Match Finished", "short": "FT", "elapsed": 90, "extra": null }
            },
            "league": { "id": 39, "name": "Premier League", "country": "England", "season": 2023 },
            "teams": {
                "home": { "id": 42, "name": "Arsenal", "winner": true },
                "away": { "id": 65, "name": "Nottingham Forest", "winner": false }
            },
            "goals": { "home": 2, "away": 1 },
            "score": {
                "fulltime": { "home": 2, "away": 1 },
                "penalty": { "home": null, "away": null }
            }
        },
        {
            "fixture": {
                "id": 1035039,
                "referee": "P. Bankes",
                "timezone": "UTC",
                "date": "2023-08-12T14:00:00+00:00",
                "timestamp": 1691848800,
                "venue": { "id": 504, "name": "Vitality Stadium", "city": "Bournemouth" },
                "status": { "long": "Match Finished", "short": "FT", "elapsed": 90, "extra": null }
            },
            "league": { "id": 39, "name": "Premier League", "country": "England", "season": 2023 },
            "teams": {
                "home": { "id": 35, "name": "Bournemouth", "winner": null },
                "away": { "id": 48, "name": "West Ham", "winner": null }
            },
            "goals": { "home": 1, "away": 1 },
            "score": {
                "fulltime": { "home": 1, "away": 1 },
                "penalty": { "home": null, "away": null }
            }
        },
        {
            "fixture": {
                "id": 1035041,
                "referee": "S. Attwell",
                "timezone": "UTC",
                "date": "2023-08-12T14:00:00+00:00",
                "timestamp": 1691848800,
                "venue": { "id": 8560, "name": "Goodison Park", "city": "Liverpool" },
                "status": { "long": "Match Finished", "short": "FT", "elapsed": 90, "extra": null }
            },
            "league": { "id": 39, "name": "Premier League", "country": "England", "season": 2023 },
            "teams": {
                "home": { "id": 45, "name": "Everton", "winner": false },
                "away": { "id": 36, "name": "Fulham", "winner": true }
            },
            "goals": { "home": 0, "away": 1 },
            "score": {
                "fulltime": { "home": 0, "away": 1 },
                "penalty": { "home": null, "away": null }
            }
        },
        {
            "fixture": {
                "id": 1035040,
                "referee": "D. Coote",
                "timezone": "UTC",
                "date": "2023-08-12T14:00:00+00:00",
                "timestamp": 1691848800,
                "venue": { "id": 508, "name": "The American Express Community Stadium", "city": "Falmer" },
                "status": { "long": "Match Finished", "short": "FT", "elapsed": 90, "extra": null }
            },
            "league": { "id": 39, "name": "Premier League", "country": "England", "season": 2023 },
            "teams": {
                "home": { "id": 51, "name": "Brighton", "winner": true },
                "away": { "id": 1359, "name": "Luton", "winner": false }
            },
            "goals": { "home": 4, "away": 1 },
            "score": {
                "fulltime": { "home": 4, "away": 1 },
                "penalty": { "home": null, "away": null }
            }
        },
        {
            "fixture": {
                "id": 1035042,
                "referee": "J. Brooks",
                "timezone": "UTC",
                "date": "2023-08-12T14:00:00+00:00",
                "timestamp": 1691848800,
                "venue": { "id": 581, "name": "Bramall Lane", "city": "Sheffield" },
                "status": { "long": "Match Finished", "short": "FT", "elapsed": 90, "extra": null }
            },
            "league": { "id": 39, "name": "Premier League", "country": "England", "season": 2023 },
            "teams": {
                "home": { "id": 62, "name": "Sheffield Utd", "winner": false },
                "away": { "id": 52, "name": "Crystal Palace", "winner": true }
            },
            "goals": { "home": 0, "away": 1 },
            "score": {
                "fulltime": { "home": 0, "away": 1 },
                "penalty": { "home": null, "away": null }
            }
        },
        {
            "fixture": {
                "id": 1035043,
                "referee": "A. Madley",
                "timezone": "UTC",
                "date": "2023-08-12T16:30:00+00:00",
                "timestamp": 1691857800,
                "venue": { "id": 562, "name": "St. James' Park", "city": "Newcastle" },
                "status": { "long": "Match Finished", "short": "FT", "elapsed": 90, "extra": null }
            },
            "league": { "id": 39, "name": "Premier League", "country": "England", "season": 2023 },
            "teams": {
                "home": { "id": 34, "name": "Newcastle", "winner": true },
                "away": { "id": 66, "name": "Aston Villa", "winner": false }
            },
            "goals": { "home": 5, "away": 1 },
            "score": {
                "fulltime": { "home": 5, "away": 1 },
                "penalty": { "home": null, "away": null }
            }
        },
        {
            "fixture": {
                "id": 1035044,
                "referee": "R. Jones",
                "timezone": "UTC",
                "date": "2023-08-13T13:00:00+00:00",
                "timestamp": 1691931600,
                "venue": { "id": 10503, "name": "Gtech Community Stadium", "city": "Brentford" },
                "status": { "long": "Match Finished", "short": "FT", "elapsed": 90, "extra": null }
            },
            "league": { "id": 39, "name": "Premier League", "country": "England", "season": 2023 },
            "teams": {
                "home": { "id": 55, "name": "Brentford", "winner": null },
                "away": { "id": 47, "name": "Tottenham", "winner": null }
            },
            "goals": { "home": 2, "away": 2 },
            "score": {
                "fulltime": { "home": 2, "away": 2 },
                "penalty": { "home": null, "away": null }
            }
        }
    ]
};
