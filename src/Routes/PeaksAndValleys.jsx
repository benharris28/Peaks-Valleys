import React from 'react';
import ApiContext from '../ApiContext'
import Button from 'react-bootstrap/Button';
import GameScreen from '../Components/PeaksAndValleysGame/GameScreen'
import PeakInfoModal from '../Components/PeaksAndValleysGame/PeakInfoModal'
import PeakFormFlow from '../Components/PeaksAndValleysGame/PeakFormFlow'

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

      <>

        <div className="container-medium">

          

       
          {!this.state.showPeakInfoModal &&
          <GameScreen 
            show={() => this.setPeakInfoModal(true)}
            onHide={() => this.setPeakInfoModal(false)}
            time={this.context.userGameInfo.peakTime}
            />
          }


          {this.state.showPeakInfoModal && 

          <PeakFormFlow />

          }
        </div>
       
        

      </>

    )
  }
}

export default PeaksAndValleys;
