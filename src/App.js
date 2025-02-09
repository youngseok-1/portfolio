import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Stacks from "./pages/Stacks";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/stacks" element={<Stacks />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
