import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/layout/navBar";
import Home from "./pages/home";
import Memories from "./pages/memories";
import Letter from "./pages/letter";
import Future_plan from "./pages/future_plan";
import Gallery from "./pages/gallery";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/memories" element={<Memories />} />

            <Route path="/letter" element={<Letter />} />

            <Route path="/future_plan" element={<Future_plan />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
