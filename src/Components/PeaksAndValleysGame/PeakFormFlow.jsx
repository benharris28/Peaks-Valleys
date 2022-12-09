import React from 'react';
import ApiContext from '../../ApiContext'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import SpeakerLabsStackedLogo from '../../Assets/SpeakerLabsStackedLogo.png';
import logonotext from '../../Assets/logonotext.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'



class PeakFormFlow extends React.Component {
  static contextType = ApiContext;

  state = {
    page: 1,
    prompt: '',
    time: 30,
    promptCheck: true,
    disableNextButton: false,
    timeRadioValue: 30
  }

  componentDidMount = () => {
    this.setState({
      prompt: ''
    })
  }

  handlePrompt = (prompt) => {
    this.setState({
      prompt: prompt
    })


    if (this.state.prompt.length > 1) {
      this.setState({
        disableNextButton: false
      })
    } else {
      this.setState({
        disableNextButton: true
      
      })
    }

  }


  handleNextButton = () => {
    const { promptCheck } = this.state;
    let nextButtonDisabled;
   
    if (promptCheck) {
      nextButtonDisabled = false;
    }

    else if (!promptCheck && this.state.prompt.length > 1) {
      nextButtonDisabled = false;
    } else {
      nextButtonDisabled = true;
    }

    return nextButtonDisabled;
  }


  handleTime = (time) => {
    this.setState({
      time: time
    })
  }

  handlePromptCheck = () => {
    const checked = this.state.promptCheck
    
    
    this.setState({
      promptCheck: !checked
    })
  }


  handlePageForward = () => {
    

   
    
    this.setState({
        page: 2
      })
  }

  handlePageBack = () => {
    this.setState({
      page: 1
    })
    
  }


  setTimeRadioValue = (value) => {
    this.setState({
      timeRadioValue: value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()


    const prompt = this.state.prompt

    const time = this.state.timeRadioValue



   if (prompt) {

      const newPrompt = this.state.prompt
      this.context.handlePeakGame(newPrompt, time)
    } else {
      const newPrompt = 'Advice to my younger self'
      this.context.handlePeakGame(newPrompt, time)
    }


    

    this.props.onHide()
    this.setState({
      page: 1,
      prompt: ''
    })

  }

  render() {
    const { show, onHide } = this.props;
    console.log(this.state)






    return (
      <div className="form-flow" style={{ height: `${this.context.height}` }}>

        <div className="form-flow-background">
          <div className="form-flow-logo-container">
              <img className="form-flow-logo" src={logonotext} alt="logo"/>

          
            </div>
          <div className="form-flow-container">
            
            <div className="form-flow-content">

            <div className="center mt-4 mb-4">
              <h2>How to Play Peaks and Valleys</h2>
            </div>


            <div className="center">

              <form>
                {this.state.page === 1 && 
                <>
                  <div className="mb-2">

                    First, let's pick a topic to talk about. Would you like us to provide a topic for you?
                  </div>
                  
                  <div className="toggle-container">
                    <ButtonGroup className="toggle-button">
                 
                      <ToggleButton
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-dark"
                        checked={this.state.promptCheck}
                        value="true"
                        onChange={(e) => this.handlePromptCheck(e.currentTarget.checked)}
                        >
                        {this.state.promptCheck ? <>Yes <FontAwesomeIcon className="check-icon ml-2" icon={faSquareCheck} /></> : 'Yes'}
                        
                      </ToggleButton>
                    </ButtonGroup>
                    
                    <ButtonGroup className="toggle-button">
                      <ToggleButton
              
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-dark"
                        checked={!this.state.promptCheck}
                        value="true"
                        onChange={(e) => this.handlePromptCheck(e.currentTarget.checked)}
                      >
                        {!this.state.promptCheck ? <>No <FontAwesomeIcon className="check-icon ml-2" icon={faSquareCheck} /></> : 'No'}
                      </ToggleButton>
                  
                    </ButtonGroup>

                </div>
                
               
                {!this.state.promptCheck &&

                  <>
                  <div className="margin-bottom">
                    <Form.Group className="mb-3" controlId="promptInput">
                      <Form.Control type="text" placeholder="test"
                        as="textarea" rows={3}
                        name="prompt"
                        className="prompt-form-input"
                        type="text"
                        placeholder="Type in your topic"
                        value={this.state.prompt}
                        onChange={(e) => this.handlePrompt(e.target.value)}

                      />

                      <Form.Text id="helpBlock" muted>

                        You can choose any topic to talk about. If you can't think of anything, we'll automatically choose a random one for you!
                      </Form.Text>

                    </Form.Group>
                  </div>
                
                
                
                  </>
                }
                  <div>
                  <Button

                    className="button"
                    onClick={this.handlePageForward}
                    disabled={this.handleNextButton()}>
                    NEXT

                  </Button>
                </div>
                
                </>
                }

                {this.state.page === 2 &&
                  <>

                    <div className="mb-4">
                      How long would you like to play for?
                    </div>
                


                    <div className="time-select-container mb-4">
                    

                <Container className="time-select-container">
                  <Row className="mb-2">
                    <Col>
                       <ButtonGroup>
                      <ToggleButton
                        id={`radio-0`}
                        type="radio"
                        variant={'outline-success'}
                        name="radio"
                        value={30}
                        checked={this.state.timeRadioValue == 30}
                        onChange={(e) => this.setTimeRadioValue(e.currentTarget.value)}
                      >
                        30 sec
                      </ToggleButton>
                      
                    </ButtonGroup>
                    </Col>
                       
                    <Col>
                      <ButtonGroup>
                      <ToggleButton
                        id={`radio-1`}
                        type="radio"
                        variant={'outline-success'}
                        name="radio"
                        value={60}
                        checked={this.state.timeRadioValue == 60}
                        onChange={(e) => this.setTimeRadioValue(e.currentTarget.value)}
                      >
                        60 sec
                      </ToggleButton>
                      
                    </ButtonGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                       <ButtonGroup>
                      <ToggleButton
                        id={`radio-2`}
                        type="radio"
                        variant={'outline-success'}
                        name="radio"
                        value={120}
                        checked={this.state.timeRadioValue == 120}
                        onChange={(e) => this.setTimeRadioValue(e.currentTarget.value)}
                      >
                        2 mins
                      </ToggleButton>
                      
                    </ButtonGroup>
                    </Col>
                       
                    <Col>
                      <ButtonGroup>
                      <ToggleButton
                        id={`radio-3`}
                        type="radio"
                        variant={'outline-success'}
                        name="radio"
                        value={300}
                        checked={this.state.timeRadioValue == 300}
                        onChange={(e) => this.setTimeRadioValue(e.currentTarget.value)}
                      >
                        5 mins
                      </ToggleButton>
                      
                    </ButtonGroup>
                    </Col>
                  </Row>
                  
                </Container>
                      </div>


                    
                     <div className="button-container">
                      
            
                       <Button
                         className="button"

                onClick={this.handleSubmit}
              >
                Enter Game
              </Button>
                         
            </div>
                  </>
                }

              </form>
            </div>

            

           </div> 
          </div>
          
        </div>


       
       
         


       
      </div>





    )
  }

}

export default PeakFormFlow;