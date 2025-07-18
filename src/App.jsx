import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseCard from "./components/CourseCard";
import Footer1 from "./components/footer/Footer1";
import Home from "./components/footer/Home";
import Navbar from "./components/footer/Navbar";
import OurTeam from "./components/OurTeam";

// import './App.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/team" element={<OurTeam />}></Route>
          {/* <CourseCard /> */}
          {/* <hr /> */}
          {/* <Footer1 /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
