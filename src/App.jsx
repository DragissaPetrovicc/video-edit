import React from "react";
import Home from "./pages/home";
import ResumePage from "./pages/resume";
import ExampleVideos from "./pages/ExampleVideos";
import {BrowserRouter,Navigate,Routes,Route} from "react-router-dom";
import { ROUTES } from "./routes"

const App = () => {
 
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path={ROUTES.HOME}/>
          <Route element={<ResumePage/>} path={ROUTES.RESUME}/>
          <Route element={<ExampleVideos/>} path={ROUTES.EXAMPLE_VIDEOS}/>
          <Route element={<Navigate to={ROUTES.HOME}/>} path="*"/>
        </Routes>
      </BrowserRouter>
   
  );
};

export default App;
