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
        { id: 0, newClass: "card-grey", circleClass: 'prompt-circle-border-gradient', innerCircleClass: "light-yellow", hint: "Raise the energy level!", symbol: 1, image: bringupenergy },
        { id: 1, newClass: "yellow", innerCircleClass: "light-yellow", hint: "Raise the energy level!", symbol: 1, image: bringupenergy },
        { id: 2, newClass: "blue", innerCircleClass: "light-blue", hint: "Bring the energy down...", symbol: 2, image: bringdownenergy  },
        { id: 3, newClass: "pink", innerCircleClass: "light-pink", hint: "Talk about yourself", symbol: 3, image: handpointing  }
      ];

    const symbolToDisplay = symbolArray.filter(s => s.id == symbol)[0]

    console.log(symbolToDisplay)
    
    
    
    return (
      <div className="prompt-container">
        <div className={`prompt-rectangle ${symbolToDisplay.newClass}`}>
          <div className={symbolToDisplay.id > 0 ? `prompt-circle ${symbolToDisplay.newClass}` : 'prompt-circle prompt-circle-border-gradient'}>
            
            <div className={symbolToDisplay.id > 0 ? `prompt-inner-circle ${symbolToDisplay.innerCircleClass}` : 'prompt-inner-circle prompt-thumbnail'}></div>

            {symbolToDisplay.id > 0 &&
               <img className="prompt-image" src={symbolToDisplay.image} />
          
            }

          
            
            
          </div>
          
          <div className={symbolToDisplay.id > 0 ? "prompt-text" : "prompt-text-white" }>{symbolToDisplay.hint}</div>
        </div>
      </div>
    )
  }
}

export default Prompt;
