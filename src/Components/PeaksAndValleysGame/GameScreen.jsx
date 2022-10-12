import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Countdown from 'react-countdown';


class GameScreen extends React.Component {

  state = {
    symbolNumber: 1,
    currentSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1665590984/GET_2_wifzlx.png',
    currentInterval: 20,
    prompt: "Advice to my younger self",
    gameOver: false,
    gameStarted: false,
    timerCount: 10000,
    secondsRemaining: '',
    status: 'started',
    time: {},
    seconds: 100,
    timer: 0
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
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer = () => {
    if (this.state.seconds > 0) {
      const interval = setInterval(this.countDown, 1000);
      this.setState({
        interval: interval
      })
    }
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.state.interval);
    }
  }



  //Placeholder for timer
  //Placeholder for phrase
  //Number generator
  //variable to determine how long to display each symbol
  //function to randomize the array at the beginning of the game
  //function to display a new symbol from array

  //Set the first symbol on button click
  //
  generateNewSymbol = () => {
    //check the symbol that is beign displayed
    //filter the array of symbols for that symbol
    //Generate a random number from the filtered array
    //add it to state
    //generate a random display interval
    //add it to state

    const { symbolNumber } = this.state;
    const symbolArray = [1, 2, 3];
    const symbolArray2 = [{ id: 1, symbol: "⬆", url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1665591206/GET_3_sasj1n.png" },
                          { id: 2, symbol: "⬆", url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1665591140/GET_r7z0v4.png" },
                          { id: 3, symbol: "⬆", url: "https://res.cloudinary.com/dhkmle6ei/image/upload/v1665591104/GET_1_nj9wwm.png" }
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
      setTimeout(this.generateNewSymbol, rand)})

  }








  render() {
    console.log(this.state)
  
    
    return (
      <div>
        <Container>
          <div>
            Peaks & Valleys
          </div>
          <div>
            <Card>
              <Card.Title>
                Peaks & Valleys
              </Card.Title>
              <Badge bg="secondary">
                {this.state.time.m} : {this.state.time.s}
              </Badge>
            </Card>
          </div>
          <div className="margin-bottom">
            <Card>
             <Card.Img variant="top" src={this.state.currentSymbol} />
            </Card>
          </div>
          <div>
            <Card>


              <Card.Body>
                <Card.Title>Your Topic</Card.Title>
                {this.state.prompt}
              </Card.Body>
            </Card>


          </div>
        </Container>

        <button
          onClick={() => this.startTimer()}>
          Start Game
        </button>
       

      </div>
    )
  }
}

export default GameScreen;
