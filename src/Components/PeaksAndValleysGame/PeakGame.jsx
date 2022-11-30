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
import Topic from './Topic';


class PeakGame extends React.Component {
  render() {
    

    return (


      <div className="mt-4">
        
       
        <Container>
          <Row>
            <Col>
              <h2 className="home-title">Peaks & Valleys</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <Prompt />
              </div>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <Timer />
            </Col>
          </Row>
          <Row>
            <Col>
              <Topic />
            </Col>
          </Row>
        </Container>
          
      </div>
    )
  }
}

export default PeakGame;
