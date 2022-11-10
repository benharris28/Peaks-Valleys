import React from 'react';
import ApiContext from '../../ApiContext'
import Symbol from './Symbol'
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
import Lottie from 'react-lottie-player';
import energyRocket from '../../Lotties/energyRocket.json'
import downArrow from '../../Lotties/downArrow.json'
import selfArrow from '../../Lotties/selfArrow.json'
import welcome from '../../Lotties/welcome.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'





class GameScreen extends React.Component {
  static contextType = ApiContext;
  state = {
    symbolNumber: 1,
    animationPosition: 0,
    symbolLottie: welcome,
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
    seconds: 200,
    timer: 0,
    running: false,
    initialSeconds: 200,
    initialMilliseconds: 3000,
    milliSeconds: 3000
  }

  setLottie = () => {
    const lottie = <Symbol play autoplay={true} loopValue={3} lottieToPlay={this.state.symbolLottie} />
    this.setState({
      newLottie: lottie
    })
    
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
        currentSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666713463/GET_17_g1fja8.png',
      })

      clearInterval(this.state.interval);
      clearInterval(this.state.symbolInterval)

      this.context.resetPeakGame(true)
    }
  }




  generateNewSymbol = () => {


    const { symbolNumber } = this.state;
    const symbolArray = [1, 2, 3];
    const symbolArray2 = [{ id: 1, newClass: "hero yellow", hint: "Raise the energy level!", symbol: energyRocket, url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666887876/GET_26_plxqdz.png" },
    { id: 2, newClass: "hero blue", hint: "Bring the energy down...", symbol: downArrow, url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666888518/GET_28_jdkbd8.png" },
    { id: 3, newClass: "hero pink", hint: "Talk about yourself", symbol: selfArrow, url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1666889067/GET_29_lkib63.png" }
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
      symbolLottie: filterSymbol2[0].symbol,
      hint: filterSymbol2[0].hint,
      newClass: filterSymbol2[0].newClass,
      gameStarted: true
    }, () => {
      this.setLottie()
      const symbolInterval = setTimeout(this.generateNewSymbol, rand)
      this.setState({
        symbolInterval: symbolInterval
      })
    })

  }


setAnimationPostion = () => {
  this.setState({
    animationPostion: 0
  })
}





  render() {
    console.log(this.state)
    const { time } = this.props
    const lottie = this.state.symbolLottie
    


    return (
      <div className="game">
         
        <div className="pt-4 pr-4 pl-4 full">
           
          <Container className="full" fluid fluid={true}>
            <div className="title-box">
                  Peaks & Valleys
                </div>
         
            <Row style={{ height: '60%'}}>
              <Col sm={12} md={12} lg={12}>
                

                <div className={this.state.newClass}>
                  <div className="hero-image">
                    
                    <div className="hero-wrap">
                      <Lottie 
                        key={this.state.symbolNumber}
                        loop={3}
                        goTo={0}
                        animationData={lottie}
                        play={true}
                        style={{ width: "150px" }}
                        />
                    
                    </div>

                  </div>






                </div>
                <div className="hint">
                  <div className="icon-box mr-1">
                    <FontAwesomeIcon className="icon" icon={faCircleInfo} />
                  </div>
                  <div>
                    {this.state.hint}
                  </div>
                 
                 
                </div>
              </Col>
              </Row>
            <Row style={{ height: '40%'}}>
         

              <Col className="bottom" sm={12} md={12} lg={12}>
                
                
                <div className="content">
                   
              <div className="progress-bar-container mb-3">
                        <div className="progress-bar-label">Time Left: {this.state.seconds}</div>
                        <ProgressBar className="timer-bar" now={this.state.seconds} min={0} max={time} />
                      </div>

                  <div className="buttons">
                       
                    
                    {this.state.running === true &&
                  <div className="topic-container mb-4">
 
                    <div className="topic-button">Your Topic</div>
                    <div className="margin-bottom">
                      <h1 className="topic">{this.state.prompt}</h1>
                    </div>
                  
                  </div>
                        }
                 
                  
                  
                   {this.state.running === false && this.context.userGameInfo.peakGameOver === true &&
                  <div className="topic-container mb-4">
 
                    <div>Great Work!</div>
                    <div className="margin-bottom">
                      <h1 className="topic">Should we play again??</h1>
                    </div>
                  
                  </div>
                    }



                      <div className="button-container">

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
