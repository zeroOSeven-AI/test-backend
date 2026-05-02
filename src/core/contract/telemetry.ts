/**
 * 📄 telemetry.ts
 * F1 / motorsport granularni podaci
 * File: /src/core/contract/telemetry.ts
 */

export type TelemetryPoint = {
    eventId: number;
    entityId: number;
    timestamp: number;           // Unix epoch / ms

    // Timing podaci
    sector1?: number;
    sector2?: number;
    sector3?: number;

    // Car telemetry
    speed?: number;
    throttle?: number;
    brake?: number;

    // Gume
    tyre?: string;

    sequenceId: number;          // Redoslijed u streamu
};
