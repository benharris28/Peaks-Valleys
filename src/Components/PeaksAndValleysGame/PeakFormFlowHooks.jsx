import React, { useState, useEffect } from 'react';
import ApiContext from '../../ApiContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Collapse from 'react-bootstrap/Collapse';
import SpeakerLabsStackedLogo from '../../Assets/SpeakerLabsStackedLogo.png';
import logonotext from '../../Assets/logonotext.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'


// Custom hook to manage the ApiContext
function useApiContext() {
  const context = React.useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApiContext must be used within a ApiContext Provider');
  }
  return context;
}

function PeakFormFlow(props) {
  // Use the useState hook to store the component state
  const [page, setPage] = useState(1);
  const [prompt, setPrompt] = useState('');
  const [time, setTime] = useState(30);
  const [promptCheck, setPromptCheck] = useState(true);
  const [yesButtonEnabled, setYesButtonEnabled] = useState(true);
  const [noButtonEnabled, setNoButtonEnabled] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [timeRadioValue, setTimeRadioValue] = useState(30);
  const [textBox, setTextBox] = useState(false);

  // Use the useEffect hook to perform any side effects
  useEffect(() => {
    setPrompt('');
  }, []);

  const handlePrompt = (prompt) => {
    setPrompt(prompt);

    if (prompt.length > 1) {
      setDisableNextButton(false);
    } else {
      setDisableNextButton(true);
    }
  };

  const handleNextButton = () => {
    const nextButtonDisabled = promptCheck
      ? false
      : !promptCheck && prompt.length > 1
      ? false
      : true;
    return nextButtonDisabled;
  };

  const handle