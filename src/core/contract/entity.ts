import { ID, SportType, EntityType, Timestamp, Nullable } from "./types";

/**
 * Canonical Entity Model (GLOBAL ID SYSTEM)
 *
 * ⚠️ Source of truth: INTERNAL ID
 * ⚠️ Provider IDs su SAMO u mappings
 */
export interface Entity {
    /**
     * Internal system ID (primary key, not provider ID)
     */
    id: ID;

    /**
     * Entity type (team, player, driver, match reference, etc.)
     */
    type: EntityType;

    /**
     * Sport domain this entity belongs to
     */
    sport: SportType;

    /**
     * Display name
     */
    name: string;

    /**
     * Optional short name / abbreviation
     */
    shortName: Nullable<string>;

    /**
     * Optional country metadata
     */
    country: Nullable<string>;

    /**
     * External provider mappings
     * NEVER used for identity, only for resolution layer
     *
     * Example:
     * {
     *   "api-football": "33",
     *   "optasports": "t12"
     * }
     */
    mappings: Record<string, string>;

    /**
     * Deterministic identity key for deduplication
     * MUST be stable across ingestion runs
     */
    fingerprint: string;

    createdAt: Timestamp;
    updatedAt: Timestamp;
}
