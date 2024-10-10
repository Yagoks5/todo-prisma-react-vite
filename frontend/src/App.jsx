import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pessoal from "./pages/Pessoal";
import Profissional from "./pages/Profissional";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/pessoal" element={<Pessoal></Pessoal>} />
            <Route
              path="/profissional"
              element={<Profissional></Profissional>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
