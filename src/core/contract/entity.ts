
/**
 * 🧩 1.1 ENTITY MODEL (GLOBAL ID SYSTEM)
 * Source of truth: Internal VYRA ID
 */

export type EntityType = "team" | "driver" | "match" | "race" | "player";
export type SportType = "football" | "f1" | "motogp" | "nba" | "tennis";

export interface Entity {
    id: number;                // internal VYRA ID (source of truth)
    type: EntityType;
    sport: SportType;

    name: string;
    shortName?: string;
    country?: string;

    mappings: Record<string, string>;

    fingerprint: string;

    createdAt: string;
    updatedAt: string;
};

export type Event = {
    id: number;
    sport: "football";
    status: string;

    startTime: string;

    competitors: number[];

    metadata: any;

    sequenceId: number;

    updatedAt: string;
};
