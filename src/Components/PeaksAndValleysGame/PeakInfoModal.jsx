import React from 'react';
import ApiContext from '../../ApiContext'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class PeakInfoModal extends React.Component {
  static contextType = ApiContext;

  state = {
    prompt: '',
    time: 30,
    promptCheck: true
  }

  handlePrompt = (prompt) => {
    this.setState({
      prompt: prompt
    })
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
  }

  render() {
    const { show, onHide } = this.props;
    console.log(this.state)



    return (
      <Modal
        {...this.props}
        dialogClassName="info-modal"
        contentClassName="info-modal-content"
        fullscreen={true}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered>

       
        <Modal.Body>
          <div className="info-modal-body">
            <div className="center mt-4 mb-4">
              <h1>How to Play Peaks and Valleys</h1>
            </div>
            
          
          

          <div>
            <form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Choose a topic for me"
                checked={this.state.promptCheck}
                onChange={(e) => this.handlePromptCheck(e.target.value)}
              />
              {!this.state.promptCheck &&


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
              }
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

            </form>
          </div>

          <div>
            <Button
              onClick={this.handleSubmit}
            >
              Enter Game
            </Button>
          </div>






</div>
        </Modal.Body>
      </Modal>





    )
  }

}

export default PeakInfoModal;