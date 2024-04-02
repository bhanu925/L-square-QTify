import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums , fetchTopAlbums , fetchSongs } from "./api/api";
import { StyledEngineProvider } from "@mui/material";

function App() {

  const [data , setData] = useState({});

  const generateData =(key,source)=>
  source().then((responseData)=>{
    setData((prev)=>({
      ...prev, 
      [key]:responseData,
    }))
  })

  useEffect(()=>{
    generateData('topAlbums', fetchTopAlbums)
    generateData('newAlbums',fetchNewAlbums)
    generateData('songs' ,fetchSongs);   
  },[])

  const {topAlbums=[],newAlbums=[] , songs=[]} = data;

  return (
    <>
    <StyledEngineProvider>
      <Navbar/>
      <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
    </StyledEngineProvider>
    </>
  );
}

export default App;
