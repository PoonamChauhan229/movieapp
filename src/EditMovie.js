import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";

export const EditMovie = () => {
  console.log(useParams());
  const { id } = useParams();
  console.log(id)

const [movie, setMovie] = useState(null);
const getMovies=()=>{
  fetch(`https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((res) => setMovie(res));
}
  useEffect(() => getMovies(), []);
  
  
  return (
  <>
    {movie? <EditMovieForm movie={movie}/> :"Loading..."}
  </>
  );
};

const EditMovieForm=({movie})=>{
  console.log(movie.name)
  const [movieName, setMovieName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const Navigate=useNavigate()
  const textStyles = {
    marginBottom: "15px",
  };

  const updateMovie=(id)=>{
    const movie = { name: movieName, poster, rating, summary,trailer };
    fetch(`https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies/${id}`,{
      method:"PUT",
      body:JSON.stringify(movie),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(()=>Navigate('/'))
    console.log(movie)
    
  }
return(
  <div
      style={{
        margin: "auto",
        width: "40%",
        padding: "10px",
        // border: "1px solid red",
      }}
    >
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Movie Name"
          variant="outlined"
          value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(e) => {
            setPoster(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
         </div>
        <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Trailer URL"
          variant="outlined"
          value={trailer}
          onChange={(e) => {
            setTrailer(e.target.value);
          }}
        />       
      </div>
      <div style={{ margin: "auto", width: "50%",display:"flex" }}>
        <Button
          sx={{ width: "100%", fontSize: "18px" }}
          variant="outlined"
          onClick={() => updateMovie(movie.id)}
        >
          Update & Save
        </Button>
        
      </div>
    </div>
)
}