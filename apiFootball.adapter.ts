import { ApiFootballEventSchema } from "./apiFootball.schema";

export class ApiFootballAdapter {
    public normalize(raw: any) {
        // 🧯 SAFE UNWRAP (ovo ti nedostaje)
        const event =
            raw?.fixture ? raw :
                raw?.event ? raw.event :
                    raw?.payload ? raw.payload :
                        raw;

        const parsed = ApiFootballEventSchema.parse(event);

        const home = parsed.teams.home;
        const away = parsed.teams.away;

        return {
            id: parsed.fixture.id,
            type: "match",
            sport: "football",
            source: "api-football",
            status: parsed.fixture.status.short,

            startTime: parsed.fixture.date,

            competitors: [home.id, away.id],

            score: {
                fulltime: {
                    home: parsed.goals?.home ?? 0,
                    away: parsed.goals?.away ?? 0
                },
                penalties: {
                    home: parsed.score?.penalty?.home ?? null,
                    away: parsed.score?.penalty?.away ?? null
                }
            },

            metadata: {
                venue: parsed.fixture.venue?.name ?? null,
                league: parsed.league,
                provider: "api-football"
            },

            sequenceId: parsed.fixture.timestamp,

            fingerprint: `api-football:event:${parsed.fixture.id}`,

            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
    }
}
