import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { IChannel, IVideo } from "../interfaces";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const VideoDetail = () => {
  const [video, setVideo] = useState<IChannel>();
  const [relatedVideos, setRelatedVideos] = useState<IVideo[]>();
  const { id } = useParams();
  console.log(video);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideo(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ sm: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://wwww.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#FFF" variant="h5" fontWeight="bold" p={2}>
              {video?.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#FFF" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${video?.snippet?.channelId}`}>
                <Typography variant="subtitle1" color="#fff">
                  {video?.snippet.channelTitle}
                </Typography>
                <CheckCircle
                  sx={{ color: "gray", fontSize: "12px", ml: "5px" }}
                />
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {video &&
                    parseInt(
                      video?.statistics?.viewCount
                    ).toLocaleString()}{" "}
                  Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {video &&
                    parseInt(
                      video?.statistics?.likeCount
                    ).toLocaleString()}{" "}
                  Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {relatedVideos && (
            <Videos videos={relatedVideos} direction="column" />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
