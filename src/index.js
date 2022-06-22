import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Circle } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} draggable>
      <Layer>
        <Circle
          x={150}
          y={100}
          radius={70}
          fill={"red"}
          stroke={"black"}
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
