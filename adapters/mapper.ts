import { EventStatus } from "../../core/types";

export function mapFootballStatus(status: string): EventStatus {
    switch (status) {
        case "FT":
        case "FINISHED":
            return "finished";
        case "NS":
            return "scheduled";
        default:
            return "unknown";
    }
}
