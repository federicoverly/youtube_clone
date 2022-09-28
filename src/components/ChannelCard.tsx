import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IChannel, IVideo } from "../interfaces";
import { demoProfilePicture } from "../utils/constants";

interface IProps {
  channel?: IChannel | undefined;
  channelVideo?: IVideo | undefined;
}

const ChannelCard = ({ channel, channelVideo }: IProps) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop: channel && "-115px",
      }}
    >
      <Link
        to={`/channel/${channel ? channel?.id : channelVideo?.id?.channelId}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            image={
              channel
                ? channel?.snippet?.thumbnails?.high?.url
                : channelVideo?.snippet.thumbnails.high.url ||
                  demoProfilePicture
            }
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #E3E3E3",
            }}
          />
          <Typography variant="h6">
            {channel ? channel?.snippet?.title : channelVideo?.snippet.title}{" "}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "px" }} />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
