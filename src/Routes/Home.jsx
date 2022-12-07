import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from '../Components/Nav';
import SpeakerLabsStackedLogo from '../Assets/SpeakerLabsStackedLogo.png';
import GameCard from '../Components/GameCard';


class Home extends React.Component {
  render() {
    const games = [
      {
        name: 'Peaks & Valleys',
        subtitle: 'Fun game to practice public speaking',
        link: '/peaks-valleys'
      }
    ]

    return (


      <div>
        
        <Container>
          <div className="mt-5 mb-5 center">
            <img src={SpeakerLabsStackedLogo} alt="home"/>

          
          </div>


          <h1 className="home-title">Game Zone</h1> 
          
          <Row className="mt-4">

            <Col>
              <Link className="no-decoration" to={'/peaks-valleys'}>
                <GameCard />
              </Link>
            </Col>
            
          </Row>
          
          
        </Container>
      </div>
    )
  }
}

export default Home;
