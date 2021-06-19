import React from 'react'
import { BrowserRouter, Route  } from "react-router-dom";
import Home from "./components/Home";
import Photo from "./components/Photo"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={Photo} path="/photo" />
      </div>
    </BrowserRouter>
  );
}

export default App;
