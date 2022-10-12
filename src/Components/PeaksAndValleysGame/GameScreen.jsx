import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


class GameScreen extends React.Component {

  state = {
    symbolNumber: 1,
    currentSymbol: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1665590984/GET_2_wifzlx.png',
    currentInterval: 20,
    prompt: "Advice to my younger self",
    gameOver: false,
    gameStarted: false
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
              <Badge bg="secondary">Timer</Badge>
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
          onClick={() => this.generateNewSymbol()}>
          Start Game
        </button>
       

      </div>
    )
  }
}

export default GameScreen;
