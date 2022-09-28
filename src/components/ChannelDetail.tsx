import { Box } from "@mui/material";
import { useEffect, useState } from "react";
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
            height: "300px",
            zIndex: 10,
          }}
        />
        <ChannelCard channel={channelDetail} />
      </Box>
      <Box sx={{ display: "flex", p: 2 }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
