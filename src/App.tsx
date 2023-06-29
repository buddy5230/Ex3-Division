import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lottery from "./components/Lottery";
import CheckNumber from "./components/CheckNumber";
import Reward from "./components/Reward";

function App() {
  return (
    <div style={{fontFamily: "Arial"}}>
      <nav className="bg-black text-center text-white pt-4 text-xl-center" style={{ height: "80px"}}>
        <h3>รางวัลล็อตเตอรี่</h3>
      </nav>
      <div  style={{ marginTop: "150px"}}>
        <Lottery />
      </div>
    </div>
  );
}

export default App;
