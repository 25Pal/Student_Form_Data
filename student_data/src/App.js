import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Student from "./Student";
import Register from "./Register"

function App() {

  return (
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/showdata" element={<Student/>} />
        </Routes>
    </BrowserRouter>
  );
  
}

export default App;
