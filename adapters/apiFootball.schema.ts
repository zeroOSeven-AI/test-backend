import { z } from "zod";

export const ApiFootballEventSchema = z.object({
    fixture: z.object({
        id: z.number(),
        date: z.string(),
        status: z.object({
            short: z.string()
        }),
        timestamp: z.number(),
        venue: z.object({
            name: z.string().nullable()
        }).nullable()
    }),

    teams: z.object({
        home: z.object({
            id: z.number(),
            name: z.string()
        }),
        away: z.object({
            id: z.number(),
            name: z.string()
        })
    }),

    goals: z.object({
        home: z.number().nullable(),
        away: z.number().nullable()
    }).nullable(),

    score: z.object({
        penalty: z.object({
            home: z.number().nullable(),
            away: z.number().nullable()
        }).nullable()
    }).nullable(),

    league: z.object({
        id: z.number(),
        name: z.string(),
        country: z.string()
    })
});
