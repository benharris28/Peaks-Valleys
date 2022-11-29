import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Prompt from './Prompt';
import Timer from './Timer';


class PeakGame extends React.Component {
  render() {
    

    return (


      <div className="mt-4">
        <div>
            <h2 className="home-title">Peaks & Valleys</h2>
            
          </div>
        <div className="game-content">
        <Container>
          

          <Row>
            <Col>
              <Prompt />
            </Col>
          </Row>
          <Row>
            <Col>
              <Timer />
            </Col>
          </Row>
        </Container>
          </div>
      </div>
    )
  }
}

export default PeakGame;
