/**
 * 📄 content.ts
 * News + Video unified model
 * File: /src/core/contract/content.ts
 */

export type ContentItem = {
    id: number;
    type: "news" | "video";
    title: string;
    source: string;
    tags: string[];
    language: string;
    country?: string;
    url: string;
    publishedAt: string;         // ISO format
    expiresAt?: string;          // ISO format (opcionalno za privremeni sadržaj)
    fingerprint: string;         // Hash za dedup (izbjegavanje duplih vijesti/videa)
};
