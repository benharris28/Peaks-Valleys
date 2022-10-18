import React from 'react';
import Nav from './Components/Nav'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Routes/Home';
import PeaksAndValleys from './Routes/PeaksAndValleys';
import ApiContext from './ApiContext';

class App extends React.Component {

  state = {
    showPeaksInfoModal: false,
    userGameInfo: {
      peakGames: '',
      peakPrompt: '',
      peakGameOver: true
    }
  }
  
  render() {

      const value = {
      ...this.state,
     
    }
    
    return (
      <ApiContext.Provider value={value}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peaks-valleys" element={<PeaksAndValleys />} />
        </Routes>
       
      </div>
      </ApiContext.Provider>
    )
  }
}

export default App;
