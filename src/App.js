import React from 'react'
import { BrowserRouter, Route  } from "react-router-dom";
import Photo from "./components/Photo"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Photo} path="/" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
