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
<<<<<<< HEAD
=======
import Nav from '../Components/Nav'
>>>>>>> design-update

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

<<<<<<< HEAD
      <div className="mt-3">
        
        <Container>
          <div className="mb-5">
=======
      <div>
        <Nav />
        <Container>
          <div className="mt-3 mb-5">
>>>>>>> design-update
            <h1>Game Zone</h1>
          </div>
          <Row>
            {games.map((game, index) =>
              <Link className="no-decoration" key={index} to={game.link}>
                <Card>
                  <Card.Body>
                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>
                    {game.subtitle}
                  </Card.Text>
                  </Card.Body>
                </Card>
              </Link>)}
          </Row>
          
          
        </Container>
      </div>
    )
  }
}

export default Home;
