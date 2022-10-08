import React from 'react';
import Container from 'react-bootstrap/Container';


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
    const symbolArray = [1,2,3];
    const symbolArray2 = [{ id: 1, symbol: "test"}, { id: 2, symbol: "test 2"}, { id: 3, symbol: "test 3"}];

    const filterSymbol = symbolArray.filter(symbol => symbol !== currentSymbol)
    console.log(filterSymbol)

    const filterSymbol2 = symbolArray2.filter(symbol => symbol.id !== currentSymbol)
    console.log(filterSymbol2)
    
    const newSymbol = filterSymbol[Math.floor(Math.random()*filterSymbol.length)];

    console.log(newSymbol)

    this.setState({
      currentSymbol: newSymbol    
    }, () => this.displaySymbol())
    
  }

  setSymbolTimer = () => {
    const minTime = 6000
    const maxTime = 20000

    const rand = Math.round(Math.random() * (maxTime - minTime)) + 500;
    console.log(rand)

    this.generateNewSymbol()
    
    setInterval(this.generateNewSymbol, 10000)

    
    
  }

  generateSymbolInterval = () => {
    const minTime = 6000
    const maxTime = 20000
   
    const rand = Math.round(Math.random() * (maxTime - minTime)) + 500;
    console.log(rand)
    return rand;
  }

  displaySymbol = () => {
    const symbolNumber = this.state.currentSymbol

    const symbolArray2 = [{ id: 1, symbol: "⬆"}, { id: 2, symbol: "⬇️"}, { id: 3, symbol: "🤟"}];
   
  const symbolToDisplay = symbolArray2.filter(symbol => symbol.id === symbolNumber)
  const newSymbol = symbolToDisplay
  console.log(symbolToDisplay)

  this.setState({
    symbol: newSymbol[0].symbol
  })
  
    
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
            Timer
          </div>
          <div>
            Symbol Container
          </div>
          <div>
            Prompt
          </div>
        </Container>
        
        <button
          onClick={() => this.setSymbolTimer()}>
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
