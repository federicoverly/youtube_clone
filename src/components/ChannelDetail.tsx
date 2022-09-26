import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IChannel, IVideo } from "../interfaces";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelCard, Videos } from "./index";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<IChannel>();
  const [videos, setVideos] = useState<IVideo[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channel={channelDetail} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
