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
import Badge from 'react-bootstrap/Badge';
import Prompt from './Prompt';
import Timer from './Timer';
import Topic from './Topic';
import StartPlayAgain from './StartPlayAgain';
import { secondsToTime } from '../../Services/PeakGameCalcs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import clockimage from '../../Assets/clockimage.png';


class PeakGame extends React.Component {
  static contextType = ApiContext;

  state = {
    symbolNumber: 0,
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
    gameStatus: 'Not Started',
    symbolObject: { id: 1, newClass: "hero yellow", hint: "Raise the energy level!", symbol: 1, url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666887876/GET_26_plxqdz.png" },
    minTime: 15000,
    maxTime: 20000
  }
  //Render topic component or start / play again button component based on game status
  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds
    }

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.context.userGameInfo.peakTime);
    this.setState({
      time: timeLeftVar,
      seconds: this.context.userGameInfo.peakTime,
      initialSeconds: this.context.userGameInfo.peakTime,
      prompt: this.context.userGameInfo.peakPrompt,
      minTime: this.context.peakGameParams.minTime,
      maxTime: this.context.peakGameParams.maxTime,


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
        symbolNumber: 0,
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

    // Prepare an array of symbols that does not contain the current symbol
    const filterSymbol = symbolArray.filter(symbol => symbol !== symbolNumber)
    console.log(filterSymbol)


    // Find a random new symbol number from the filtered list
    const newSymbol = filterSymbol[Math.floor(Math.random() * filterSymbol.length)];


    // Grab the whole symbol object for the new symbol number
    const filterSymbol2 = symbolArray2.filter(symbol => symbol.id == newSymbol)
    console.log(filterSymbol2)
    console.log(newSymbol)


    const minTime = this.state.minTime;
    const maxTime = this.state.maxTime;

    const rand = Math.round(Math.random() * (maxTime - minTime)) + minTime;
    console.log(rand)

    this.setState({

      symbolNumber: newSymbol,
      currentSymbol: filterSymbol2[0].url,
      symbolObject: filterSymbol2[0],
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
    const { gameStatus, symbolNumber, prompt, seconds, time } = this.state;
    console.log(this.state)

    console.log(gameStatus)


    return (


      <div className="mt-4">


        <Container>
          <Row className="mb-4">
            <Col xs={3}>
              <Link to='/'>
                <FontAwesomeIcon className="back-button" icon={faCircleChevronLeft} />
              </Link>
            </Col>
            <Col xs={5} md={6}>
            </Col>
            <Col xs={4} md={3}>
              <div className="timer-box">
                <img className="thumbnail" src={clockimage} />
                <div className="timer-text">{seconds > 0 ? `0${time.m} : ${time.s}` : 'Done'}</div>
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <h2 className="home-title">Peaks & Valleys</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <Prompt symbol={symbolNumber} />
              </div>

            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Topic chosenTopic={prompt} gameStatus={gameStatus} />
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
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default PeakGame;
