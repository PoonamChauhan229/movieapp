import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";


import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
export default function Movie({
  movieAvatar,
  name,
  poster,
  summary,
  rating,
  id,
  trailer,deleteButton,editButton
}) {
  //console.log({ movieAvatar });
  const [show, setShow] = useState(false);
  const ratingStyle = {
    color: rating > 8 ? "green" : "crimson",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "0px",
    margin: "0px",
  };

  const Navigate = useNavigate();
  return (
    <Card sx={{ marginBottom: "25px", marginRight: "15px", width: "360px" }}>
      <CardHeader
        style={{ padding: "0px" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {Object.values(movieAvatar)
              .slice(0, 1)
              .join("")
              .slice(0, 1)
              .toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon
              onClick={() => {
                Navigate(`/movies/${id}`);
              }}
            />
          </IconButton>
        }
        title={
          <span style={{ fontSize: "22px" }}>
            <b>{name}</b>
          </span>
        }
        subheader={
          <Button
            style={ratingStyle}
            startIcon={<GradeIcon style={{ fontSize: "25px" }} />}
          >{rating}
          </Button>
        }
      />

      <CardMedia
        component="img"
        height={320}
        image={poster}
        alt=""
        style={{ objectFit: "fill" }}
      />

      <CardActions disableSpacing>
        <Counter /> {deleteButton}{editButton}
        
        <IconButton
          aria-label="delete"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </CardActions>
      {show && (
        <CardContent>
          <Typography className="card-text">{summary}</Typography>
        </CardContent>
      )}
    </Card>
  );
}
