import { ID, SportType, EventStatus, Timestamp, Nullable } from "./types";

/**
 * Canonical event model
 * - 100% provider-agnostic
 * - 100% processor-safe
 * - 100% delta-friendly
 */
export interface CanonicalEvent {
    id: ID;

    type: "match" | "race";

    sport: SportType;

    /**
     * Single source of truth for origin provider
     * e.g. "api-football", "openf1", "nba-api"
     */
    source: string;

    status: EventStatus;

    startTime: Nullable<Timestamp>;

    /**
     * Fully resolved internal entity IDs (NOT provider IDs)
     */
    competitors: ID[];

    score: {
        fulltime: {
            home: number;
            away: number;
        };
        penalties: {
            home: Nullable<number>;
            away: Nullable<number>;
        };
    };

    metadata: {
        venue: Nullable<string>;

        league: {
            id: Nullable<number>;
            name: string;
            country: Nullable<string>;
        };
    };

    /**
     * Used for ordering / replay / event sequencing
     */
    sequenceId: number;

    /**
     * Deterministic fingerprint (used for dedup + reconciliation)
     */
    fingerprint: string;

    createdAt: Timestamp;
    updatedAt: Timestamp;
}
