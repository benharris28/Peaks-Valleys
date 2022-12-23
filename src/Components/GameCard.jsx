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
import Button from 'react-bootstrap/Button';
import Nav from '../Components/Nav';
import hiker from '../Assets/hiker.png';

class GameCard extends React.Component {
  render() {
    return (
      
        <div className="gamecard">

          
        

         
           
     
          
  
         
     
          <div className="gamecard-body">
            <div className="gamecard-content-container">

              <div className="gamecard-circle">
                  <div className="border-gradient border-gradient-pink">
                    <div className="gamecard-content-thumbnail border-gradient-pink"></div>
                
                  
                  </div>
                </div>
              
              <div className="gamecard-content-title">Peaks & Valleys</div>
              <div className="gamecard-content-subtitle">Become a dynamic and engaging speaker</div>
              <Button className="button black mt-4">PLAY</Button>
            </div>
            
         

          </div>
        </div>
      
    )
  }
}

export default GameCard;