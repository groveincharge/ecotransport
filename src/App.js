import EbikePage from "./pages/EbikePage";
import EbikeFooter from "./pages/EbikeFooter";
import EbikeFeatures from "./pages/EbikeFeatures";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/maintenance" element={<EbikePage/>}/>
      <Route path="/features" element={<EbikeFeatures/>}/>
       </Routes>
       <EbikeFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
