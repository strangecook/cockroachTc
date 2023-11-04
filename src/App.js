import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login/Login";
import { Parallax } from "./parallax/Parallax";

import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Parallax />}> </Route>
            <Route path="/login" element={<Login />}> </Route>
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;