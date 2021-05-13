import React from "react";
import Header from "./component/Header/Header";
import CenteredTabs from "./component/Navbar/Navbar";
import ImageSlider from "./component/Slider/Slider";
import Footer from "./component/Footer/Footer";
import MediaCard from "./component/Cards/Card";



import "./App.css";
import Routing from "./config/Routiing";

function App() {
  return (
    <div className="App">
      <Header />
      <CenteredTabs />

      <ImageSlider />
      {/* <MediaCard /> */}
      <Routing />    

      <Footer />
    </div>
  );
}

export default App;
