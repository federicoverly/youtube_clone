import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { IVideo } from "../interfaces";
import { ChannelCard, VideoCard } from "./index";

interface IProps {
  videos: IVideo[];
  direction?: "column";
}

const Videos = ({ videos, direction }: IProps) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
    >
      {videos.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelVideo={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
