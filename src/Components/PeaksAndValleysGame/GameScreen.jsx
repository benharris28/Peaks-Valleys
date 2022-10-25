import React from 'react';
import ApiContext from '../../ApiContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Countdown from 'react-countdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';



class GameScreen extends React.Component {
  static contextType = ApiContext;
  state = {
    symbolNumber: 1,
    currentSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666709816/GET_13_dnwcwx.png',
    endSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666713463/GET_17_g1fja8.png',
    currentInterval: 20,
    prompt: "Advice to my younger self",
    gameOver: false,
    gameStarted: false,
    timerCount: 10000,
    secondsRemaining: '',
    status: 'started',
    time: {},
    seconds: 200,
    timer: 0,
    running: false,
    initialSeconds: 200,
    initialMilliseconds: 3000,
    milliSeconds: 3000
  }

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
          gameOver: false
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
        gameOver: true,
        currentSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666709816/GET_13_dnwcwx.png',
      })

      clearInterval(this.state.interval);
      clearInterval(this.state.symbolInterval)

      this.context.resetPeakGame(true)
    }
  }




  generateNewSymbol = () => {


    const { symbolNumber } = this.state;
    const symbolArray = [1, 2, 3];
    const symbolArray2 = [{ id: 1, symbol: "Up", url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666713271/GET_14_fw9utn.png" },
    { id: 2, symbol: "Down", url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666713328/GET_15_ovurfn.png" },
    { id: 3, symbol: "You", url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666713361/GET_16_invpyv.png" }
    ];

    const filterSymbol = symbolArray.filter(symbol => symbol !== symbolNumber)
    console.log(filterSymbol)



    const newSymbol = filterSymbol[Math.floor(Math.random() * filterSymbol.length)];

    const filterSymbol2 = symbolArray2.filter(symbol => symbol.id == newSymbol)
    console.log(filterSymbol2)
    console.log(newSymbol)

    const minTime = 5000
    const maxTime = 10000
    const rand = Math.round(Math.random() * (maxTime - minTime)) + minTime;
    console.log(rand)

    this.setState({

      symbolNumber: newSymbol,
      currentSymbol: filterSymbol2[0].url,
      gameStarted: true
    }, () => {
      const symbolInterval = setTimeout(this.generateNewSymbol, rand)
      this.setState({
        symbolInterval: symbolInterval
      })
    })

  }








  render() {
    console.log(this.state)
    const { time } = this.props


    return (
      <div className="game">
        <div className="pt-2 pb-2 pr-4 pl-4">
          <Container fluid>
            <Row>
              <Col sm={12} md={12} lg={5}>

                <div className="hero">
                  <div className="hero-image" style={{ "backgroundImage": `url(${this.state.currentSymbol})` }}>
                    <div className="hero-wrap">
                      <div className="progress-bar-container">
                        <div className="mb-1">Time Left</div>
                        <ProgressBar className="timer-bar" now={this.state.seconds} min={0} max={time} />
                      </div>
                    </div>

                  </div>






                </div>
              </Col>

              <Col sm={12} md={12} lg={7}>
                <div className="content">


                  {this.state.running === true &&
                  <div className="topic-container mb-4">
 
                    <div>Your Topic</div>
                    <div className="margin-bottom">
                      <h1 className="topic">{this.state.prompt}</h1>
                    </div>
                  
                  </div>
}

                  {this.state.running === false &&
                  <div className="topic-container mb-4">
 
                    <div>Get Ready</div>
                    <div className="margin-bottom">
                      <h1 className="topic">Are you ready to play?</h1>
                    </div>
                  
                  </div>
}

                  <div className="center">

                    {this.state.running === false && this.context.userGameInfo.peakGameOver === false &&

                      <Button
                        className="game-button"
                        onClick={() => this.startTimer()}>
                        Start Game
                      </Button>
                    }

                    {this.state.running === false && this.context.userGameInfo.peakGameOver === true &&

                      <Button
                        className="game-button"
                        onClick={() => this.props.show()}>
                        Play Again
                      </Button>
                    }
                  </div>

                </div>
              </Col>

            </Row>


          </Container>


        </div>


      </div>
    )
  }
}

export default GameScreen;
