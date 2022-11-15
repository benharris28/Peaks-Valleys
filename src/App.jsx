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
<<<<<<< HEAD
    }
=======
    },
    height: '100%'
  }

  handleResizedScreen = () => {
    this.setState({
     
      height: window.innerHeight + 'px'
    });
  };

  componentDidMount() {
    this.setState({ height: window.innerHeight + 'px' });
    window.addEventListener('resize', this.handleResizedScreen);
>>>>>>> design-update
  }

  handlePeakGame = (prompt, time) => {
    const { userGameInfo } = this.state;
    
    this.setState({
      userGameInfo: {
        ...userGameInfo,
        peakPrompt: prompt,
        peakTime: time,
        peakGameOver: false,
        peakGameRunning: true
      }
      
    })
  }

  resetPeakGame = (status) => {
    const { userGameInfo } = this.state;
    this.setState({
      userGameInfo: {
        ...userGameInfo,
<<<<<<< HEAD
=======
        peakPrompt: '',
>>>>>>> design-update
      peakGameOver: status
      }
      
    })
  }
<<<<<<< HEAD
  
  render() {
    console.log(this.state)
=======

  handleResize = () => {
    this.setState({
      height: window.innerHeight,
    
  });
  }
  
  render() {
    console.log(this.state)
    console.log(this.state.height)
    const height = this.state.height
   
   
>>>>>>> design-update

      const value = {
      ...this.state,
        handlePeakGame: this.handlePeakGame,
        resetPeakGame: this.resetPeakGame
     
    }
    
    return (
      <ApiContext.Provider value={value}>
<<<<<<< HEAD
      <div className="app">
        <div className="background"></div>
        <Nav />
=======
      <div className="app" style={{ height: `${height}`}}>
        <div className="background"></div>
      
>>>>>>> design-update
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
