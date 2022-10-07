import React from 'react';
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Routes/Home';
import PeaksAndValleys from './Routes/PeaksAndValleys';

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peaks-valleys" element={<PeaksAndValleys />} />
        </Routes>
       
      </div>
    )
  }
}

export default App;
