import React from 'react';
import ApiContext from '../../ApiContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class PeakInfoModal extends React.Component {
  static contextType = ApiContext;

  state = {
    prompt: ''
  }


  render() {
    const { show, onHide } = this.props;

  
    

    return (
     <Modal
      {...this.props}
      dialogClassName="info-modal"
      contentClassName="info-modal-content"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
       <Modal.Body>
         <h4>How to Peaks and Valleys</h4>
         <div>
           <ul>
             <li>Guess the selling price of the house in 5 tries</li>
             <li>A guess within $50k of the price is a winner</li>
             <li>We'll reveal a new detail about the house after each guess</li>
           </ul>
         </div>
         <div>
           <input 
             type="text"
             value={this.state.prompt}
             
             />
         </div>
       
       
         
      
       
         
         <hr />
         <p>A new listing will be available each day</p>
       </Modal.Body>
     </Modal>





    )
  }

}

export default PeakInfoModal;