import React from 'react';


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

    const filterSymbol = symbolArray.filter(symbol => symbol !== currentSymbol)
    console.log(filterSymbol)
    
    const newSymbol = filterSymbol[Math.floor(Math.random()*filterSymbol.length)];

    console.log(newSymbol)

    this.setState({
      currentSymbol: newSymbol
    })
    
  }

  setSymbolTimer = () => {
    const minTime = 6000
    const maxTime = 20000

    const rand = Math.round(Math.random() * (maxTime - minTime)) + 500;
    console.log(rand)
    
    setInterval(this.generateNewSymbol, this.generateSymbolInterval())

    
    
  }

  generateSymbolInterval = () => {
    const minTime = 6000
    const maxTime = 20000
   
    const rand = Math.round(Math.random() * (maxTime - minTime)) + 500;
    console.log(rand)
    return rand;
  }
  
  render() {

   
    return (
      <div>
        Game Screen
        <button
          onClick={() => this.setSymbolTimer()}>
          Start Game
        </button>
        <div>
          {this.state.currentSymbol}
        </div>
        
      </div>
    )
  }
}

export default GameScreen;
