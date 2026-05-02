// src/processor/normalize.ts
import { Entity, EntityType, SportType } from "../core/contract/entity";
import { Event } from "../core/contract/event";
import { mapFootballStatus } from "../adapters/football/mapper";
import { EntityResolver } from "./entityResolver";

export class Processor {
    private resolver = new EntityResolver();
    // ✅ Jedinstveni timestamp za cijelu operaciju
    private readonly now = new Date().toISOString();
    private readonly provider = "api-football";

    public normalize(dto: { entities: any[]; events: any[] }) {
        const finalEntities: Entity[] = [];
        const entityIdMap = new Map<string, number>();

        // 1. ENTITY LAYER (Teams)
        for (const e of dto.entities.filter(ent => ent.type === "team")) {
            const fingerprint = this.resolveFingerprint(e);
            const internalId = this.resolver.resolveId(fingerprint);

            if (e.externalId) {
                entityIdMap.set(e.externalId, internalId);
            }

            if (!finalEntities.find(ent => ent.id === internalId)) {
                finalEntities.push({
                    ...this.toCoreEntity(e, fingerprint),
                    id: internalId,
                    createdAt: this.now,
                    updatedAt: this.now
                });
            }
        }

        // 2. EVENT LAYER (Matches)
        const finalEvents: Event[] = [];
        for (const e of dto.entities.filter(ent => ent.type === "match")) {
            const coreEvent = this.toCoreEvent(e, entityIdMap);
            if (coreEvent) finalEvents.push(coreEvent);
        }

        return { entities: finalEntities, events: finalEvents };
    }

    private resolveFingerprint(e: any): string {
        const base = `${e.provider}:${e.type}`;
        if (e.externalId && e.externalId !== "null") {
            return `${base}:${e.externalId}`;
        }
        const hash = Math.abs(this.hashCode(e.payload?.name || "unknown")).toString(16);
        return `${base}:h_${hash}`;
    }

    private hashCode(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return hash;
    }

    private toCoreEntity(e: any, fingerprint: string): Entity {
        return {
            id: 0,
            type: e.type as EntityType,
            sport: e.sport as SportType,
            name: (e.payload?.name || "Unknown").trim(),
            mappings: e.externalId ? { [e.provider]: String(e.externalId) } : {},
            fingerprint,
            createdAt: this.now,
            updatedAt: this.now
        };
    }

    private toCoreEvent(e: any, idMap: Map<string, number>): any {
        const p = e.payload;
        if (!p?.fixture || !p?.teams) return null;

        const homeId = idMap.get(String(p.teams.home?.id));
        const awayId = idMap.get(String(p.teams.away?.id));

        if (!homeId || !awayId) return null;

        const fixtureId = String(p.fixture.id);

        return {
            id: Number(fixtureId) || 0,
            type: "match", // ✅ Dodano: Eksplicitni tip
            sport: "football",
            source: this.provider, // ✅ Dodano: Izvor podataka
            status: mapFootballStatus(p.fixture.status?.short) as any,
            startTime: p.fixture.date || this.now,
            competitors: [homeId, awayId],
            score: {
                fulltime: {
                    home: Number(p.goals?.home ?? 0),
                    away: Number(p.goals?.away ?? 0)
                },
                penalties: {
                    home: p.score?.penalty?.home ?? null,
                    away: p.score?.penalty?.away ?? null
                }
            },
            metadata: {
                venue: p.fixture.venue?.name || null,
                league: {
                    id: p.league?.id || null,
                    name: p.league?.name || "Unknown League",
                    country: p.league?.country || null
                }
            },
            sequenceId: Number(p.fixture.timestamp ?? 0),
            fingerprint: `${this.provider}:event:${fixtureId}`,
            createdAt: this.now,
            updatedAt: this.now
        };
    }
}
