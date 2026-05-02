import { ApiFootballAdapter } from "../adapters/football/apiFootball.adapter";
import { EntityResolver } from "./entityResolver";

export class Processor {
    private resolver = new EntityResolver();
    private adapter = new ApiFootballAdapter();

    public normalize(rawEvents: any[]) {
        const entities: any[] = [];
        const events: any[] = [];

        for (const raw of rawEvents) {

            // 1. ADAPTER → canonical event
            const event = this.adapter.normalize(raw);

            // 2. resolve entity IDs
            const homeId = this.resolver.resolveId(`team:${event.competitors[0]}`);
            const awayId = this.resolver.resolveId(`team:${event.competitors[1]}`);

            event.competitors = [homeId, awayId];

            // 3. push final event
            events.push(event);
        }

        return { entities, events };
    }
}
