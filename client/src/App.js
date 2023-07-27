import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Add from "./Page/Add";
import AddBooks from "./Page/AddBooks";
import Books from "./Page/Books";
import Update from "./Page/Update";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<AddBooks />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
