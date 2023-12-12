// import './App.css';
import React, { } from "react";
import Header from "./component/layouts/Header";
import SideNav from "./component/layouts/SideNav";
import Footer from "./component/layouts/Footer";
import Home from "./component/home/Home";


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Home/>
      <SideNav/>
    </div>
  );
}

export default App;
