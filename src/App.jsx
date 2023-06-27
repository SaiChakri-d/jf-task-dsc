import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Guide from "./pages/Guide";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
     <div className="flex flex-row">
     <Router>
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
     </div>
    </>
  );
}

export default App;
