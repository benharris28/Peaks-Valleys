import React from 'react';
import ApiContext from '../ApiContext'
import Button from 'react-bootstrap/Button';
import GameScreen from '../Components/PeaksAndValleysGame/GameScreen'
import PeakInfoModal from '../Components/PeaksAndValleysGame/PeakInfoModal'


class PeaksAndValleys extends React.Component {
  static contextType = ApiContext;
 
  state = {
    showPeakInfoModal: false
  }

  setPeakInfoModal = (status) => {
    this.setState({
      showPeakInfoModal: status
    })
  }
  
  render() {
    return (
      <div>
        <div className="container-medium">

           <div className="center">
            <h4>Peaks and Valleys</h4>
          </div>

          {this.context.userGameInfo.peakGameOver && 
            <div>
              <Button
                onClick={() => this.setPeakInfoModal(true)}
                >
                Hello
              </Button>
            </div>
          
          }
          
          <GameScreen />

          <PeakInfoModal
              show={this.state.showPeakInfoModal}
              onHide={() => this.setPeakInfoModal(false)}
            />
        </div>
       
        
      </div>
    )
  }
}

export default PeaksAndValleys;
