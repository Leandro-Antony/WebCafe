import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { LogSign } from "./pages/logSign.jsx";

import "./global/styles.css"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/logsign" element={<LogSign />}></Route>
    </Routes>
    </>
    
);
}

export default App
