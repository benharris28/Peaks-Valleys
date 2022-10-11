import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


class GameScreen extends React.Component {

  state = {
    currentSymbol: 1,
    currentInterval: 20,
    prompt: "Advice to my younger self",
    gameOver: false
  }

  //Placeholder for timer
  //Placeholder for phrase
  //Number generator
  //variable to determine how long to display each symbol
  //function to randomize the array at the beginning of the game
  //function to display a new symbol from array

  generateNewSymbol = () => {
    //check the symbol that is beign displayed
    //filter the array of symbols for that symbol
    //Generate a random number from the filtered array
    //add it to state
    //generate a random display interval
    //add it to state

    const { currentSymbol } = this.state;
    const symbolArray = [1, 2, 3];
    const symbolArray2 = [{ id: 1, symbol: "test" }, { id: 2, symbol: "test 2" }, { id: 3, symbol: "test 3" }];

    const filterSymbol = symbolArray.filter(symbol => symbol !== currentSymbol)
    console.log(filterSymbol)

    const filterSymbol2 = symbolArray2.filter(symbol => symbol.id !== currentSymbol)
    console.log(filterSymbol2)

    const newSymbol = filterSymbol[Math.floor(Math.random() * filterSymbol.length)];

    console.log(newSymbol)

    this.setState({
      currentSymbol: newSymbol
    }, () => this.displaySymbol())

  }

  setSymbolTimer = () => {
    const minTime = 2000
    const maxTime = 4000

    const rand = Math.round(Math.random() * (maxTime - minTime)) + 500;
    console.log(rand)



    setTimeout(this.generateNewSymbol(), rand)

   

  }

  generateSymbolInterval = () => {
   setTimeout(this.setSymbolTimer, 3000)
  }

  displaySymbol = () => {
    const symbolNumber = this.state.currentSymbol

    const symbolArray2 = [{ id: 1, symbol: "⬆" }, { id: 2, symbol: "⬇️" }, { id: 3, symbol: "🤟" }];

    const symbolToDisplay = symbolArray2.filter(symbol => symbol.id === symbolNumber)
    const newSymbol = symbolToDisplay
    console.log(symbolToDisplay)

    this.setState({
      symbol: newSymbol[0].symbol
    }, () => this.setSymbolTimer() )


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
             <Card.Img variant="top" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1665260744/slim-emcee-152brjBa5WA-unsplash_zhf801.jpg" />
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
        <div>
          {this.state.symbol}

        </div>

      </div>
    )
  }
}

export default GameScreen;
