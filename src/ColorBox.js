export const ColorBox = ({ color }) => {
  const ColorBoxStyle = {
    backgroundColor: color,
    height: "35px",    
    margin: "auto",
    width: "39%",
    padding: "10px",
    // border: "1px solid red",
  };
  return (
    <div style={{marginTop:"15px"}}>
      <div style={ColorBoxStyle}>{color} Added Successfuly</div>
    </div>
  );
};
