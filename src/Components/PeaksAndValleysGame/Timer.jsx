import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import clockimage from '../../Assets/clockimage.png';
import ProgressBar from 'react-bootstrap/ProgressBar';


class Timer extends React.Component {
  render() {
    const time = 30;
    
    
    
    return (
      <div>
        <div className="timer-rectangle pt-2 pb-2">
          <Container>
            <Row className="mb-4">
              <Col xs={6}><img className="thumbnail" src={clockimage} /></Col>
              <Col xs={6}><div className="timer-text">Time Left: 26</div></Col>
            </Row>
            <Row>
              <Col>
                <ProgressBar className="timer-bar" now={26} min={0} max={time} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Timer;
