import React, { useEffect, useRef } from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Granim from "granim";
import "./App.css";
import ScrollButton from "./components/ScrollButton";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const granimInstance = new Granim({
      element: canvasRef.current,
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#834d9b", "#d04ed6"],
            ["#1d976c", "#93f9b9"],
            ["#009ffd", "#2a2a72"],
          ],
          transitionSpeed: 2000,
        },
      },
    });

    return () => granimInstance.destroy(); // Clean up the instance on unmount
  }, []);

  return (
    <>
     <ScrollButton />
      <canvas id="logo-canvas" ref={canvasRef}></canvas>
      <div className="app-container">
        <PortfolioContainer />
       
      </div>
    </>
  );
};

export default App;
