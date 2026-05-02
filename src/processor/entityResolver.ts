// src/processor/entityResolver.ts
export class EntityResolver {
    // U realnom sustavu, ovo je tvoja baza (Postgres/Redis)
    private store = new Map<string, number>();
    private lastId = 0;

    public resolveId(fingerprint: string): number {
        if (this.store.has(fingerprint)) {
            return this.store.get(fingerprint)!;
        }

        this.lastId++;
        this.store.set(fingerprint, this.lastId);
        return this.lastId;
    }
}
