import React from 'react';
import Lottie from 'react-lottie-player';
import energyRocket from '../../Lotties/energyRocket.json'
import downArrow from '../../Lotties/downArrow.json'

class Symbol extends React.Component {
  render() {
    const { lottieToPlay, loopValue, play } = this.props;
    return (
      <div>
                      <Lottie
      loop={loopValue}
                        
      animationData={lottieToPlay}
      play
      style={{ width: 150, height: 150 }}
    />
      </div>
    )
  }
}

export default Symbol;
