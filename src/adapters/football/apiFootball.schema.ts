import { z } from "zod";

const toNumber = z.preprocess((v) => {
    if (typeof v === "string") {
        const n = Number(v.trim());
        return Number.isFinite(n) ? n : undefined;
    }
    return typeof v === "number" ? v : undefined;
}, z.number().optional());

const cleanString = z.preprocess((v) =>
    typeof v === "string" ? v.trim() : undefined,
    z.string().optional()
);

export const ApiFootballItemZod = z.object({
    fixture: z.object({
        id: toNumber,
        date: cleanString,
        timestamp: toNumber,
        status: z.object({ short: cleanString }).optional(),
        venue: z.object({ name: cleanString }).optional()
    }).passthrough().optional(),
    teams: z.object({
        home: z.object({ id: toNumber, name: cleanString }).passthrough().optional(),
        away: z.object({ id: toNumber, name: cleanString }).passthrough().optional()
    }).optional(),
    goals: z.object({ home: toNumber, away: toNumber }).optional(),
    score: z.object({
        penalty: z.object({ home: toNumber, away: toNumber }).optional()
    }).optional(),
    events: z.array(z.any()).optional()
}).passthrough();
