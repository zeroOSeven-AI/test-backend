/**
 * 📄 manifest.ts
 * State metadata (sequence + checksum)
 * File: /src/core/contract/manifest.ts
 */

export type StateManifest = {
    sequenceId: number;
    checksum: string;
    isFullSnapshot: boolean;      // Definira je li payload cijeli state ili samo delta
};
