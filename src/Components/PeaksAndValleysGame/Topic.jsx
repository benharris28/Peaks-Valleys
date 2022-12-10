import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lightbulbicon from '../../Assets/lightbulbicon.png';


class Topic extends React.Component {
  render() {
   const { chosenTopic, gameStatus } = this.props;
  const topicClass = gameStatus === 'Not Started' ? 'topic-container blur' : 'topic-container';
    
    
    return (
      <div>
        <div className="topic-rectangle pt-3 pb-3">
         
          <div className="icon-badge mb-2">
            <Container>
              <Row>
                <Col xs={3}>
                  <img className="topic-icon" src={lightbulbicon} />
                </Col>
                <Col xs={9}>
                  <div> Your Topic</div>
                </Col>
              </Row>
            </Container>
            
            </div>
          <div className={topicClass}>
            {chosenTopic}
          </div>
        </div>
     
      </div>
    )
  }
}

export default Topic;
