import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';



class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.props.history.push('/home');
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
            <Navbar.Brand onClick={this.goTo.bind(this, 'home')}>Hasura - Auth0 - React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end"> 
            <Nav className="mr-auto">
            <Button
              bsStyle="primary"
              className="btn-margin"  
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
