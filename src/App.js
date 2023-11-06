import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from "./Login/Login";
import Logine from './Login/Logine';
import { Parallax } from "./parallax/Parallax";

import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Parallax />}> </Route>
            <Route path="/login" element={<Logine />}> </Route>
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;