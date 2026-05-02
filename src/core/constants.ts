export const SPORT_TYPES = [
    "football",
    "f1",
    "motogp",
    "nba",
    "tennis",
] as const;

export const ENTITY_TYPES = [
    "team",
    "driver",
    "player",
    "match",
    "race",
    "content",
] as const;

// 🔥 Ovo mora odgovarati mapperu
export const EVENT_STATUSES = [
    "not_started",
    "first_half",
    "halftime",
    "second_half",
    "extra_time",
    "penalties",
    "finished",
    "postponed",
    "cancelled",
    "unknown"
] as const;
