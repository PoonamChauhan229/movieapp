import { useEffect, useState } from "react";
import Movie from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
const MovieList = () => {
  const Navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
const getMovies=()=>{
  fetch("https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies")
      .then((data) => data.json())
      .then((res) => setMovieList(res));
}
  useEffect(() => getMovies(), []);

  const deleteMovies=(id)=>{
    fetch(`https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies/${id}`,{method:"DELETE"})
      .then((data) => getMovies())
}

  
  // console.log(movieList)
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        width: "89%",
        padding: "10px",
      }}
    >
      {movieList.map((element, index) => {
        //console.log(element)
        return (
          <Movie {...element} id={element.id} key={element.id} movieAvatar={element} 
          deleteButton={
            <IconButton color="error" aria-label="add an alarm">
              <DeleteIcon onClick={
                ()=>deleteMovies(element.id)
              }/>
            </IconButton>

          }

          editButton={
            <IconButton color="error" aria-label="add an alarm">
              <EditIcon onClick={
                ()=>{Navigate(`/edit/${element.id}`)}}
              />
            </IconButton>

          }
          
          />
        );
      })}
    </div>
  );
};
export default MovieList;
