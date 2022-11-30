import React from 'react';
import handpointing from '../../Assets/handpointing.png';


class Prompt extends React.Component {
  render() {
    
    
    
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
