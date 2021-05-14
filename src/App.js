import React from "react";
import Header from "./component/Header/Header";
import CenteredTabs from "./component/Navbar/Navbar";
import ImageSlider from "./component/Slider/Slider";
import Footer from "./component/Footer/Footer";

import Routing from "./config/Routiing";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CenteredTabs />

      <ImageSlider />

      <Routing />

      <Footer />
    </div>
  );
}

export default App;
