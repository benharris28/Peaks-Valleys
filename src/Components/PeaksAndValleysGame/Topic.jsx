import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lightbulbicon from '../../Assets/lightbulbicon.png';


class Topic extends React.Component {
  render() {
    const time = 30;
    
    
    
    return (
      <div>
        <div className="topic-rectangle pt-3 pb-3">
          <div className="icon-container mb-2">
            <img className="icon" src={lightbulbicon} />
          </div>
          <div className="icon-badge mb-2"><div>Your Topic</div></div>
          <div className="topic-container">
            Advice to my younger self
          </div>
        </div>
     
      </div>
    )
  }
}

export default Topic;
