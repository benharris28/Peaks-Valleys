import React from 'react';
import handpointing from '../../Assets/handpointing.png';
import bringupenergy from '../../Assets/bringupenergy.png';
import bringdownenergy from '../../Assets/bringdownenergy.png';


class Prompt extends React.Component {
  render() {
    const { symbol } = this.props;
    console.log(symbol);

    const symbolArray = 
      [
        { id: 1, newClass: "yellow", innerCircleClass: "light-yellow", hint: "Raise the energy level!", symbol: 1, image: bringupenergy },
        { id: 2, newClass: "blue", innerCircleClass: "light-blue", hint: "Bring the energy down...", symbol: 2, image: bringdownenergy  },
        { id: 3, newClass: "pink", innerCircleClass: "light-pink", hint: "Talk about yourself", symbol: 3, image: handpointing  }
      ];

    const symbolToDisplay = symbolArray.filter(s => s.id == symbol)[0]

    console.log(symbolToDisplay)
    
    
    
    return (
      <div className="prompt-container">
        <div className={`prompt-rectangle ${symbolToDisplay.newClass}`}>
          <div className={`prompt-circle ${symbolToDisplay.newClass}`}>
            <div className={`prompt-inner-circle ${symbolToDisplay.innerCircleClass}`}></div>
            
               <img className="prompt-image" src={symbolToDisplay.image} />
          
           
            
            
          </div>
          <div className="prompt-text">{symbolToDisplay.hint}</div>
        </div>
      </div>
    )
  }
}

export default Prompt;
