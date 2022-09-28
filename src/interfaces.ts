export interface IVideo {
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
      high: {
        height: number;
        url: string;
        width: number;
      };
      medium: {
        height: number;
        url: string;
        width: number;
      };
    };
    title: string;
  };
}

export interface IChannel {
  brandingSettings: {
    channel: {
      country: string;
      description: string;
      keywords: string;
      title: string;
      unsubscribedTrailer: string;
    };
    image: {
      bannerExternalUrl: string;
    };
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      upload: string;
    };
  };
  id: string;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    country: string;
    customUrl: string;
    description: string;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
      high: {
        height: number;
        url: string;
        width: number;
      };
      medium: {
        height: number;
        url: string;
        width: number;
      };
    };
    title: string;
  };
  statistics: {
    hiddenSubscriberCount: boolean;
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
    likeCount: string;
  };
}
