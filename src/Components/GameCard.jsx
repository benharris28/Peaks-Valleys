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
import hiker from '../Assets/hiker.png';

class GameCard extends React.Component {
  render() {
    return (
      
        <Card>
          <Card.Img variant="top" src={hiker} />
          <Card.Body>
            Testing
          </Card.Body>
        </Card>
      
    )
  }
}

export default GameCard;