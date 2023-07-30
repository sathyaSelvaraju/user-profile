import React from "react";
import { Route, Routes } from "react-router-dom";
import{useRoutes} from 'react-router'
import "./App.css";
import LandingPage from "./pages/LandingPage";
import route from "./route";
// import Charts from "./pages/Maps";
// import Contact from "./pages/Contact";
// import Maps from "./pages/Charts";

function App() {
  const routeElement = useRoutes(route)
  return (
    <div className="App">
    
      {/* <LandingPage /> */}
      {routeElement}
      {/* <Routes>
        <Route path="charts" element={<Charts />}>
          {" "}
        </Route>
        <Route path="/" element={<Contact />}></Route>
        <Route path="maps" element={<Maps />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
