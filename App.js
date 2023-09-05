import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Components/Error";
function App() {
  return (
    <div className="Ap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} >
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Error/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
