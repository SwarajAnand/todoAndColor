import { useState } from "react";

const color = [
  {
    id: 1,
    name: "Red",
    hex: "#FF0000",
  },
  {
    id: 2,
    name: "Green",
    hex: "#00FF00",
  },
  {
    id: 3,
    name: "Blue",
    hex: "#0000FF",
  },
  {
    id: 4,
    name: "Yellow",
    hex: "#FFFF00",
  },
  {
    id: 5,
    name: "Purple",
    hex: "#800080",
  },
];

const Matrix = () => {
  const [colorVal, setColorVal] = useState("");
  const matrixContainer = () => {
    let number = 5;
    let grid = [];

    for (let i = 0; i < number; i++) {
      const row = [];
      for (let j = 0; j < number; j++) {
        row.push(
          <div
            key={`${i}-${j}`}
            style={{ border: "1px solid white", width: "50px", height: "50px" }}
            onClick={(e) => {
              // console.log(e);
              e.target.style.backgroundColor = colorVal;
            }}
          ></div>
        );
      }
      grid.push(
        <div key={i} style={{ display: "flex" }}>
          {row}
        </div>
      );
    }

    console.log(grid);

    return grid;
  };

  const copyColor = (color) => {
    setColorVal(color);
  };
  return (
    <>
      <h1>Working</h1>
      {matrixContainer()}
      <div style={{ display: "flex" }}>
        {color.map((item) => (
          <div
            style={{
              backgroundColor: item.hex,
              height: "50px",
              width: "50px",
              border: "1px solid black",
            }}
            onClick={() => copyColor(item.hex)}
            key={item.id}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Matrix;
