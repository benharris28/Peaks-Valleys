import React from 'react';
import ApiContext from '../ApiContext'
import Button from 'react-bootstrap/Button';
import GameScreen from '../Components/PeaksAndValleysGame/GameScreen'
import PeakInfoModal from '../Components/PeaksAndValleysGame/PeakInfoModal'
import PeakFormFlow from '../Components/PeaksAndValleysGame/PeakFormFlow'
import PeakGame from '../Components/PeaksAndValleysGame/PeakGame'


class PeaksAndValleys extends React.Component {
  static contextType = ApiContext;
 
  state = {
    showPeakInfoModal: false,
    showGame: false,
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


  
  render() {
    return (

      <>

        <div className="container-medium">


          

       
          

           {!this.state.showPeakInfoModal &&
          <PeakGame 
            show={() => this.setPeakInfoModal(true)}
            />
           }
       
          {!this.state.showPeakInfoModal && this.state.showGame &&

          <GameScreen 
            show={() => this.setPeakInfoModal(true)}
            onHide={() => this.setPeakInfoModal(false)}
            time={this.context.userGameInfo.peakTime}
            />

          }


          {this.state.showPeakInfoModal && 

          <PeakFormFlow 
            onHide={() => this.setPeakInfoModal(false)}
            />

          }

        </div>
       
        

      </>

    )
  }
}

export default PeaksAndValleys;
