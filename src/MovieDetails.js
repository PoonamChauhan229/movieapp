import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import IconButton from "@mui/material/IconButton";
import { ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

export const MovieDetails = () => {


  console.log(useParams());
  const { id } = useParams();
  //console.log(movieList);
  //const movie = movieList[id];
  const [movie,setMovie]=useState({})
  const getMovie=()=>{
    fetch(`https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies/${id}`,{method:"GET",})
        .then((data) => data.json())
        .then((res) => setMovie(res));
  }
    useEffect(() => getMovie(), []);

  
  const ratingStyle = {
    color: movie.rating > 8 ? "green" : "crimson",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "0px 0px 8px 0px",
  };
  const navigate = useNavigate();
  const listStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    padding: "0px 0px 8px 0px",
  };
  return (
    <>
      <div>
        <div>
          <div
            style={{
              padding: "3px",
              width: "99.1%",
              marginLeft: "0.2%",
            }}
          >
            <ListItem  style={listStyle} button>
              {movie.name}<br/>              
            </ListItem>
            <div style={ratingStyle}>{movie.rating}⭐⭐</div>
          </div>
          <iframe
            width="99.7%"
            height="500"
            src={movie.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ marginLeft: "0.2%", paddingTop: "0%" }}
          ></iframe>
          <div>
            <div style={{ marginLeft: "0.2%" }}>
              <ListItem style={listStyle} button>
                {movie.summary}
              </ListItem>              
            </div>
            <Divider />
          </div>
        </div>

        <Button
          variant="outlined"
          style={{
            margin: "5px 10px 5px 10px",
            padding: "2px 30px 2px 0px",
            fontSize: "17px",
          }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <IconButton aria-label="delete" size="large">
            <NavigateBeforeIcon fontSize="inherit" />
          </IconButton>
          <b>Back</b>
        </Button>
      </div>
    </>
  );
};
