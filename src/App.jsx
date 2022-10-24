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
      peakPrompt: 'Advice to my younger self',
      peakTime: '',
      peakGameOver: false
    }
  }

  handlePeakGame = (prompt, time) => {
    const { userGameInfo } = this.state;
    
    this.setState({
      userGameInfo: {
        ...userGameInfo,
        peakPrompt: prompt,
        peakTime: time,
        peakGameOver: false
      }
      
    })
  }

  resetPeakGame = (status) => {
    const { userGameInfo } = this.state;
    this.setState({
      userGameInfo: {
        ...userGameInfo,
      peakGameOver: status
      }
      
    })
  }
  
  render() {
    console.log(this.state)

      const value = {
      ...this.state,
        handlePeakGame: this.handlePeakGame,
        resetPeakGame: this.resetPeakGame
     
    }
    
    return (
      <ApiContext.Provider value={value}>
      <div className="app">
        <div className="background"></div>
        <Nav />
        <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peaks-valleys" element={<PeaksAndValleys />} />
        </Routes>
        </div>
       
      </div>
      </ApiContext.Provider>
    )
  }
}

export default App;
