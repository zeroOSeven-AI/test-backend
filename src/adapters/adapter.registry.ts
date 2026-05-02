/**
 * 📄 adapter.registry.ts
 * Centralni registar instanciranih adaptera prema strukturi direktorija.
 */

import { HypraceAdapter } from "./f1/hyprace.adapter";
import { OpenF1Adapter } from "./f1/openF1.adapter";
import { ApiFootballAdapter } from "./football/apiFootball.adapter";
import { GNewsAdapter } from "./news/gnews.adapter";
import { NewsDataAdapter } from "./news/newsdata.adapter";
import { RssAdapter } from "./news/rss.adapter";
import { PlaylistAdapter } from "./video/playlist.adapter";
import { YoutubeAdapter } from "./video/youtube.adapter";

export const ADAPTER_REGISTRY = {
    // F1 Providers
    f1_hyprace: new HypraceAdapter(),
    f1_openf1: new OpenF1Adapter(),

    // Football Providers
    football_api: new ApiFootballAdapter(),

    // News Providers
    news_gnews: new GNewsAdapter(),
    news_data: new NewsDataAdapter(),
    news_rss: new RssAdapter(),

    // Video Providers
    video_playlist: new PlaylistAdapter(),
    video_youtube: new YoutubeAdapter(),
} as const;

/**
 * Tip koji ograničava unos samo na registrirane providere.
 */
export type ProviderName = keyof typeof ADAPTER_REGISTRY;
