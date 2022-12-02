import React from 'react';
import handpointing from '../../Assets/handpointing.png';
import bringupenergy from '../../Assets/bringupenergy.png';
import bringdownenergy from '../../Assets/bringdownenergy.png';


class Prompt extends React.Component {
  render() {
    const { symbol } = this.props;
    
    const symbols = [
      { id: 1, newClass: "hero yellow", hint: "Raise the energy level!", symbol: 1},
      { id: 2, newClass: "hero blue", hint: "Bring the energy down...", symbol: 2},
      { id: 3, newClass: "hero pink", hint: "Talk about yourself", symbol: 3}
    ];

    
    
    
    return (
      <div className="prompt-container">
        <div className="prompt-rectangle">
          <div className="prompt-circle">
            <div className="prompt-inner-circle"></div>
            
               <img className="prompt-image" src={handpointing} />
          
           
            
            
          </div>
          <div className="prompt-text">Talk normally</div>
        </div>
      </div>
    )
  }
}

export default Prompt;
