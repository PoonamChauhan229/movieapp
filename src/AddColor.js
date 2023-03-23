import { useState } from "react";
import { ColorBox } from "./ColorBox";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddColor = () => {
  const [color, setColor] = useState("");
  const inputstyle = {
    backgroundColor: color,
  };

  const initialcolorList = ["red", "orange", "yellow"];
  const [colorList, setcolorList] = useState(initialcolorList);
  return (
    <>
    <div
      style={{
        margin: "auto",
        width: "40%",
        padding: "10px",
        // border: "1px solid red",
        display:"flex"
      }}
    >
      <TextField
        style={inputstyle}
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="Color Name"
        variant="outlined"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />      
        <Button
          sx={{ width: "40%", fontSize: "18px",marginLeft:"15px" }}
          variant="contained"
          onClick={() => {
            setcolorList([...colorList, color]);
          }}
        >
          Add Color
        </Button>
        </div>    
      {colorList.map((element, index) => {
        return <ColorBox color={element} key={index} />;
      })}
    </>
  );
};
export default AddColor;
