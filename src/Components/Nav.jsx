import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Nav extends React.Component {
  render() {
    return (
      <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src='https://secureservercdn.net/198.71.233.226/2hq.c03.myftpupload.com/wp-content/uploads/2017/01/logo_menu.png'
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
       
      </div>
    )
  }
}

export default Nav;
