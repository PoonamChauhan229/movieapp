import { useState } from "react";
import Badge from "@mui/material/Badge";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { IconButton } from "@mui/material";

const Counter = () => {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);

 
  return (
    <>
      <IconButton>
        <Badge
          badgeContent={like}
          color="primary"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          <ThumbUpIcon color="action" />
        </Badge>
      </IconButton>

      <IconButton>
        <Badge
          badgeContent={dislike}
          color="error"
          onClick={() => {
            setdisLike(dislike + 1);
          }}
        >
          <ThumbDownAltIcon color="action" />
        </Badge>
      </IconButton>

    </>
  );
};
export default Counter;
