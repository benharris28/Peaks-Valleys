import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ApiContext from '../../ApiContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Prompt from './Prompt';
import Timer from './Timer';
import Topic from './Topic';
import StartPlayAgain from './StartPlayAgain';
import { secondsToTime } from '../../Services/PeakGameCalcs';


class PeakGame extends React.Component {
  static contextType = ApiContext;

  state = {
    symbolNumber: 1,
    animationPosition: 0,
    newClass: 'hero black',
    hint: 'Peaks & Valleys',
    currentSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666883887/GET_22_yuuusy.png',
    endSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666713463/GET_17_g1fja8.png',
    currentInterval: 20,
    prompt: "Advice to my younger self",
    gameOver: false,
    gameStarted: false,
    timerCount: 10000,
    secondsRemaining: '',
    status: 'started',
    time: {},
    seconds: 20,
    timer: 0,
    running: false,
    initialSeconds: 20,
    initialMilliseconds: 3000,
    milliSeconds: 3000,
    gameStatus: 'Not Started'
  }
  //Render topic component or start / play again button component based on game status
  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.initialSeconds);
    this.setState({
      time: timeLeftVar,
      prompt: this.context.userGameInfo.peakPrompt,


    });
  }



  startTimer = () => {
    this.generateNewSymbol()
    const initialSeconds = this.context.userGameInfo.peakTime
    let timeLeftVar = this.secondsToTime(this.state.initialSeconds);
    this.setState({ time: timeLeftVar, seconds: this.context.userGameInfo.peakTime, prompt: this.context.userGameInfo.peakPrompt }, () => {

      if (this.state.seconds > 0) {
        const interval = setInterval(this.countDown, 1000);
        this.setState({
          interval: interval,
          running: true,
          gameOver: false,
          gameStatus: "Running"
        })
      }

    });


  }

  resetGame = () => {
    this.context.resetPeakGame()
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let milliSeconds = this.state.milliseconds - 10

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      milliSeconds: milliSeconds
    });

    // Check if we're at zero.
    if (seconds < 0) {

      this.setState({
        running: false,
        gameStatus: 'Game Over',
        gameOver: true,
        currentSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666713463/GET_17_g1fja8.png',
      })

      clearInterval(this.state.interval);
      clearInterval(this.state.symbolInterval)

      
    }
  }




  generateNewSymbol = () => {


    const { symbolNumber } = this.state;
    const symbolArray = [1, 2, 3];

    const symbolArray2 = [{ id: 1, newClass: "hero yellow", hint: "Raise the energy level!", symbol: 1, url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666887876/GET_26_plxqdz.png" },

    { id: 2, newClass: "hero blue", hint: "Bring the energy down...", symbol: 2, url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666888518/GET_28_jdkbd8.png" },
    { id: 3, newClass: "hero pink", hint: "Talk about yourself", symbol: 3, url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666889067/GET_29_lkib63.png" }
    ];

    // Find a random new symbol that is not a repeat of the current symbol
    const filterSymbol = symbolArray.filter(symbol => symbol !== symbolNumber)
    console.log(filterSymbol)



    const newSymbol = filterSymbol[Math.floor(Math.random() * filterSymbol.length)];

    const filterSymbol2 = symbolArray2.filter(symbol => symbol.id == newSymbol)
    console.log(filterSymbol2)
    console.log(newSymbol)


    const minTime = 10000
    const maxTime = 15000

    const rand = Math.round(Math.random() * (maxTime - minTime)) + minTime;
    console.log(rand)

    this.setState({

      symbolNumber: newSymbol,
      currentSymbol: filterSymbol2[0].url,
      symbolLottie: filterSymbol2[0].symbol,
      hint: filterSymbol2[0].hint,
      newClass: filterSymbol2[0].newClass,
      gameStarted: true
    }, () => {
   
      const symbolInterval = setTimeout(this.generateNewSymbol, rand)
      this.setState({
        symbolInterval: symbolInterval
      })
    })

  }
  
  render() {
    const { gameStatus, symbolNumber } = this.state;
    console.log(this.state)
   
    console.log(gameStatus)
    

    return (


      <div className="mt-4">
        
       
        <Container>
          <Row>
            <Col>
              <h2 className="home-title">Peaks & Valleys</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <Prompt symbol={symbolNumber}/>
              </div>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <Timer />
            </Col>
          </Row>
          <Row>
            <Col>
             
              {gameStatus === 'Not Started' && 
                <StartPlayAgain status={gameStatus} startTimer={this.startTimer} />
              }

              {gameStatus === 'Game Over' && 
                <StartPlayAgain status={gameStatus} show={this.props.show} />
              }
                

              {gameStatus === 'Running' && 
                <Topic />
              }

              
            </Col>
          </Row>
        </Container>
          
      </div>
    )
  }
}

export default PeakGame;
