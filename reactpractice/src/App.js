import React from 'react';
import Navbar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Wrapper from "/.components/Wrapper";



function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <ImageCard />
      <Wrapper />
    </div>
  );
}

export default App;
