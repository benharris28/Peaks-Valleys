import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Routes/Home';
import PeaksAndValleys from './Routes/PeaksAndValleys';
import ApiContext from './ApiContext';
import Airtable from 'airtable';

const App = () => {
  const [state, setState] = useState({
    showPeaksInfoModal: false,
    userGameInfo: {
      peakGames: '',
      peakPrompt: 'Advice to my younger self',
      peakTime: '',
      peakGameOver: false
    },
    peakGameParams: {
      minTime: 15000,
      maxTime: 20000,
      topics: ['Advice to my younger self', 'What I want to be when I grow up'],
    },
    height: '100%'
  });

  const API_KEY = 'keyP9Ri1WHoSEV5W1';

  const base = new Airtable({ apiKey: API_KEY }).base('appZyKiZkjj23ORuN');

  const handleResizedScreen = () => {
    setState({
      height: window.innerHeight + 'px'
    });
  };

  useEffect(() => {
  base('Topics').select({
    view: 'Grid view'
  }).eachPage((records, fetchNextPage) => {
    // This function (`page`) will get called for each page of records.

    const topics = records.map(record => record.get('topic'));

    setState(prevState => ({
      ...prevState,
      peakGameParams: {
        ...prevState.peakGameParams,
        topics
      }
    }));

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  }, function done(err) {
    if (err) { console.error(err); return; }
  });

  base('Game Parameters').select({
    view: 'Grid view',
    filterByFormula: `AND({min_time}, {max_time})`,
  }).firstPage((error, records) => {
    if (error) {
      console.log(error)
      return;
    }
    
    const record = records[0];
    const minTime = record.get('min_time');
    const maxTime = record.get('max_time');
   

    setState(prevState => ({
      ...prevState,
      peakGameParams: {
        ...prevState.peakGameParams,
        minTime,
        maxTime
      }
    }));
  });
}, []);

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      height: window.innerHeight + 'px'
    }));
    window.addEventListener('resize', handleResizedScreen);

    return () => window.removeEventListener('resize', handleResizedScreen);
  }, []);

  const handlePeakGame = (prompt, time) => {
    setState(prevState => ({
      ...prevState,
      userGameInfo: {
        ...prevState.userGameInfo,
        peakPrompt: prompt,
        peakTime: time,
        peakGameOver: false,
        peakGameRunning: true
      }
    }));
  }

  const resetPeakGame = (status) => {
    setState(prevState => ({
      ...prevState,
      userGameInfo: {
        ...prevState.userGameInfo,
        peakPrompt: '',
        peakGameOver: status,
        peakGameStatus: 'Not Started'
      }
    }));
  }

  const endPeakGame = () => {
    setState(prevState => ({
      ...prevState,
      userGameInfo: {
        ...prevState.userGameInfo,
        peakPrompt: '',
        peakGameOver: status,
        peakGameStatus: 'Game Over'
      }
    }));
  }

  const handleResize = () => {
    setState(prevState => ({
      ...prevState,
      height: window.innerHeight
    }));
  }

  console.log(state);
  console.log(state.height);
  const height = state.height;

  const value = {
    ...state,
    handlePeakGame,
    resetPeakGame,
    endPeakGame
  };

  return (
    <ApiContext.Provider value={value}>

      <div className="app" style={{ height: `${height}` }}>


        <div className="background"></div>


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


export default App;
