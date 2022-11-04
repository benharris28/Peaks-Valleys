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

      <div className="mt-3">
        
        <Container>
          <div className="mb-5">
            <h1>Game Zone</h1>
          </div>
          <Row className="mb-3">
            {games.map((game, index) =>
              <Link className="no-decoration" key={index} to={game.link}>
                <Card>
                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>
                    {game.subtitle}
                  </Card.Text>

                </Card>
              </Link>)}
          </Row>
          
          <Row>
            <Card>
              <Card.Title>Test</Card.Title>
            </Card>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;
