import React from 'react';
import Button from 'react-bootstrap/Button';


class StartPlayAgain extends React.Component {
  render() {
   const { status, startTimer, show } = this.props;
    
    
    
    return (
      <div>
        {status === "Not Started" && 
          <Button 
            className="button"
            onClick={() => startTimer()}
            >
            Start
          </Button>
        }

        {status === "Game Over" && 
          <Button 
            className="button"
            onClick={() => show()}
            >
            Play Again
          </Button>
        }

        
      </div>
    )
  }
}

export default StartPlayAgain;
