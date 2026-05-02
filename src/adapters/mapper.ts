/**
 * Pure mapping functions
 * RAW → canonical fields (no side effects)
 *
 * Used by processor or adapter
 * NEVER touches storage or state
 */

/**
 * Map football match status
 */
export function mapFootballStatus(short: string): string {
    const map: Record<string, string> = {
        "NS": "not_started",
        "1H": "first_half",    // 👈 Ovdje su ti trebali navodnici
        "HT": "halftime",
        "2H": "second_half",
        "FT": "finished",
        "ET": "extra_time",
        "PEN": "penalties",
        "PST": "postponed",
        "CANC": "cancelled",
    };

    return map[short] ?? "unknown";
}

/**
 * Normalize team name
 */
export function mapTeamName(name: string): string {
    return name?.trim() ?? "";
}

/**
 * Normalize country
 */
export function mapCountry(country: string | null): string | null {
    if (!country) return null;
    return country.trim();
}

/**
 * Generic safe string mapper
 */
export function safeString(value: any): string {
    if (!value) return "";
    return String(value).trim();
}
