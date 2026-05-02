/**
 * 📄 types.ts
 * Shared utility types & Canonical Enforcements
 */

import { SPORT_TYPES, ENTITY_TYPES, EVENT_STATUSES } from "./constants";

/**
 * 🎯 CANONICAL ENFORCEMENTS
 * Izvlačimo stroge tipove iz konstanti (Single Source of Truth)
 */
export type SportType = typeof SPORT_TYPES[number];
export type EntityType = typeof ENTITY_TYPES[number];
export type EventStatus = typeof EVENT_STATUSES[number];

/**
 * Global ID type for all core entities/events/content.
 */
export type ID = string | number;

/**
 * Nullable = value can explicitly be null
 */
export type Nullable<T> = T | null;

/**
 * Optional = value may be omitted entirely
 */
export type Optional<T> = T | undefined;

/**
 * Utility for fields that may be missing OR explicitly null
 */
export type Maybe<T> = T | null | undefined;

/**
 * Base interface for anything with identity in the system
 */
export interface Identifiable {
    id: ID;
}

/**
 * Unified timestamp format.
 */
export type Timestamp = string | number;
