import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ApiContext from '../../ApiContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Prompt from './Prompt';
import Timer from './Timer';
import Topic from './Topic';
import StartPlayAgain from './StartPlayAgain';


class PeakGame extends React.Component {
  static contextType = ApiContext;
  
  //Render topic component or start / play again button component based on game status
  //
  
  render() {
    const { gameStatus } = this.context.userGameInfo;
    console.log(gameStatus)
    

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
             
              {gameStatus === 'Not Started' && 
                <StartPlayAgain />
              }

              {gameStatus === 'GameOver' && 
                <StartPlayAgain />
              }
                

              {gameStatus === 'Running' && 
                <Topic />
              }

              
            </Col>
          </Row>
        </Container>
          
      </div>
    )
  }
}

export default PeakGame;
