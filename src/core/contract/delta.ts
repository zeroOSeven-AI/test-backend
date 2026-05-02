/**
 * 📄 delta.ts
 * Definira delta payload (State machine logika)
 * File: /src/core/contract/delta.ts
 */

export type Delta = {
    fromSequence: number;
    toSequence: number;

    // Mape promjena (Key je ID entiteta/eventa)
    changedEntities: Record<number, any>;
    changedEvents: Record<number, any>;

    // Opcionalni stream telemetrije
    changedTelemetry?: Record<number, any>;

    checksum: string;            // Validacija integriteta stanja
};
