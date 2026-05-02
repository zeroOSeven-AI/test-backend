/**
 * 📄 event.ts
 * Predstavlja utakmicu / utrku (core state)
 * File: /src/core/contract/event.ts
 */

export type EventStatus =
    | "scheduled"
    | "live"
    | "finished"
    | "postponed"
    | "cancelled"
    | "unknown";

export type Event = {
    id: number;

    sport: "football" | "f1" | "motogp" | "nba" | "tennis";

    status: EventStatus;

    // 🔥 FIX 1
    startTime: string | null;

    competitors: number[];

    // 🔥 FIX 2 (izvučeno iz metadata)
    score: {
        home: number;
        away: number;
        penalties?: {
            home: number;
            away: number;
        };
    };

    metadata: Record<string, any>;

    sequenceId: number;

    updatedAt: string;
};
