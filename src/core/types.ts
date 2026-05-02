/**
 * 📄 types.ts
 * Shared utility types (minimal, non-overlapping primitives)
 */

/**
 * Global ID type for all core entities/events/content.
 * Keep flexible for Supabase (string) + internal systems (number).
 */
export type ID = string | number;

/**
 * Nullable = value can explicitly be null (DB / API optional null state)
 */
export type Nullable<T> = T | null;

/**
 * Optional = value may be omitted entirely (undefined in JS sense)
 */
export type Optional<T> = T | undefined;

/**
 * Utility for fields that may be missing OR explicitly null (common in APIs)
 */
export type Maybe<T> = T | null | undefined;

/**
 * Base interface for anything with identity in the system
 */
export interface Identifiable {
    id: ID;
}

/**
 * Unified timestamp format across system boundaries.
 * Use string (ISO) as primary, number only for internal optimization layers.
 */
export type Timestamp = string | number;
