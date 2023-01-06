import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  //   console.log(videoId, snippet);
  return (
    <Card>
      {/* if theres a video get videoId else it must be a url */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* ? sets errors on null paths to undefined */}
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 350, height: 180 }}
        />
      </Link>
    </Card>
  );
};

export default VideoCard;
