import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup.string().required("Fill the correct feild?").min(1),
  poster: yup.string().required("Fill the correct feild?").min(1),
  rating: yup.number().required("Fill the correct feild?").min(1).max(10),
  summary: yup.string().required("Fill the correct feild?").min(1),
  trailer: yup.string().required("Fill the correct feild?").min(1),
});

export const AddMovie = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
      console.log("onSubmit", newMovie);
      addMovie(newMovie);
    },
  });
 
  const Navigate = useNavigate();
  const textStyles = {
    marginBottom: "15px",
  };

  const addMovie = (newMovie) => {
 
    fetch("https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => Navigate("/"));
    console.log(newMovie);
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
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
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          error={formik.errors.name && formik.touched.name}
          helperText= {formik.errors.name && formik.touched.name?formik.errors.name :""}
        />
       
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          name="poster"
          value={formik.values.poster}
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          error={formik.errors.poster && formik.touched.poster}
          helperText={formik.errors.poster && formik.touched.poster?formik.errors.poster :""}
        />
         
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          error={formik.errors.rating && formik.touched.rating}
          helperText={formik.errors.rating && formik.touched.rating?formik.errors.rating :""}
        />
         
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          name="summary"
          value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          error={formik.errors.summary && formik.touched.summary}
          helperText={formik.errors.summary && formik.touched.summary?formik.errors.summary :""}
        />
         
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Trailer URL"
          variant="outlined"
          name="trailer"
          value={formik.values.trailer}
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          error={formik.errors.trailer && formik.touched.trailer}
          helperText={formik.errors.trailer && formik.touched.trailer?formik.errors.trailer :""}
        />
        
      </div>
      <div style={{display: "flex" }}>
        <Button
          type="submit"
          sx={{ width: "40%", fontSize: "18px" }}
          variant="outlined"
        >
          Add Movie
        </Button>

        <Button
          sx={{ width: "40%", fontSize: "18px", marginLeft: "15px" }}
          variant="outlined"
          color="secondary"
          onClick={() => {
            Navigate("/");
          }}
        >
          Back
        </Button>
      </div>
    </form>
  );
};
