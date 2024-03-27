import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";

function App() {

  return (
    <>
    <StyledEngineProvider>
      <Navbar/>
    </StyledEngineProvider>
    </>
  );
}

export default App;
