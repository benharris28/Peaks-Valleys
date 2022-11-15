import React from 'react';
import ApiContext from '../../ApiContext'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class PeakInfoModal extends React.Component {
  static contextType = ApiContext;

  state = {
    page: 1,
    prompt: '',
    time: 30,
    promptCheck: true,
    disableNextButton: false
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

  handleSubmit = (e) => {
    e.preventDefault()


    const prompt = this.state.prompt
    const time = this.state.time

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
      <Modal
        {...this.props}
        dialogClassName="info-modal"
        contentClassName="info-modal-content"

        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered>


        <Modal.Body>
          <div className="info-modal-body">
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
                    variant="outline-primary"
                    checked={this.state.promptCheck}
                    value="true"
                    onChange={(e) => this.handlePromptCheck(e.currentTarget.checked)}
                  >
                    Yes
                  </ToggleButton>
                  </ButtonGroup>
                <ButtonGroup className="toggle-button">
                  <ToggleButton
              
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={!this.state.promptCheck}
                    value="true"
                    onChange={(e) => this.handlePromptCheck(e.currentTarget.checked)}
                  >
                    No
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

                      <Form.Text id="passwordHelpBlock" muted>
                        You can choose any topic to talk about. If you can't think of anything, we'll automatically choose a random one for you!
                      </Form.Text>

                    </Form.Group>
                  </div>
                
                
                
                  </>
                }
                  <div>
                  <Button
                    onClick={this.handlePageForward}
                    disabled={this.state.disableNextButton}>
                    Next
                  </Button>
                </div>
                
                </>
                }

                {this.state.page === 2 &&
                  <>
                <div className="margin-bottom">
                  <Form.Label htmlFor="chooseTime">How long do you want to play for?</Form.Label>
                  <Form.Select aria-label="Default select example"
                    onChange={(e) => this.handleTime(e.target.value)}
                    value={this.state.time}
                  >
                    <option value="5">5 seconds</option>
                    <option value="30">30 seconds</option>
                    <option value="60">1 minute</option>
                    <option value="120">2 minutes</option>
                    <option value="10800">3 hours (I don't have much to do today)</option>
                  </Form.Select>
                </div>
                     <div className="button-container">
                      
              <Button
                className="form-button"
                variant="outline-primary"
                onClick={this.handlePageBack}
              >
                Back
              </Button>
                       <Button
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
        </Modal.Body>
      </Modal>





    )
  }

}

export default PeakInfoModal;