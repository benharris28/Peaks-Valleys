import React from 'react';
import ApiContext from '../ApiContext'
import Button from 'react-bootstrap/Button';
import GameScreen from '../Components/PeaksAndValleysGame/GameScreen'
import PeakInfoModal from '../Components/PeaksAndValleysGame/PeakInfoModal'


class PeaksAndValleys extends React.Component {
  static contextType = ApiContext;
 
  state = {
    showPeakInfoModal: false,
    gameOver: this.context.userGameInfo.peakGameOver
  }

  componentDidMount() {
    this.setPeakInfoModal(true)
  }

  setPeakInfoModal = (status) => {
    this.setState({
      showPeakInfoModal: status
    })
  }

  resetPeakGame = () => {
    
  }
  
  render() {
    return (
<<<<<<< HEAD
      <div>
=======
      <>
>>>>>>> design-update
        <div className="container-medium">

          

       
          
          <GameScreen 
            show={() => this.setPeakInfoModal(true)}
            onHide={() => this.setPeakInfoModal(false)}
            time={this.context.userGameInfo.peakTime}
            />

          <PeakInfoModal
              show={this.state.showPeakInfoModal}
              onHide={() => this.setPeakInfoModal(false)}
            />
        </div>
       
        
<<<<<<< HEAD
      </div>
=======
      </>
>>>>>>> design-update
    )
  }
}

export default PeaksAndValleys;
