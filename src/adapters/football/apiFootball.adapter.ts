import { SportType } from "../../core/contract/entity";
import { ApiFootballItemZod } from "./apiFootball.schema";

export class ApiFootballAdapter {
    private readonly provider = "api-football";
    private readonly sport: SportType = "football";

    normalize(raw: any) {
        const entities: any[] = [];
        const events: any[] = [];

        if (!raw?.response || !Array.isArray(raw.response)) return { entities, events };

        for (const item of raw.response) {
            const parsed = ApiFootballItemZod.safeParse(item);
            if (!parsed.success) continue;

            const data = parsed.data;

            // 🚫 HARD GUARD: Nema meča bez ID-a i oba tima
            if (!data.fixture?.id || !data.teams?.home?.id || !data.teams?.away?.id) continue;

            entities.push(this.mapTeam(data.teams.home, data));
            entities.push(this.mapTeam(data.teams.away, data));

            entities.push({
                provider: this.provider,
                type: "match",
                externalId: String(data.fixture.id),
                sport: this.sport,
                payload: data
            });
        }
        return { entities, events };
    }

    private mapTeam(team: any, context: any) {
        return {
            provider: this.provider,
            type: "team",
            externalId: team.id ? String(team.id) : null,
            sport: this.sport,
            payload: {
                name: team.name || "Unknown Team",
                country: context?.league?.country ?? null
            }
        };
    }
}
