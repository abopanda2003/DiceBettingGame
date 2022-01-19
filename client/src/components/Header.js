import React from 'react';
// import '../App.css';
import Web3 from 'web3';
// import { Grid } from '@material-ui/core';
import logo from '../assets/img/logo.png';
import { Navbar, NavDropdown, Nav, Form, Button } from 'react-bootstrap';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Actions from '../actions/actions';
import socketIOClient from "socket.io-client";


var socket;

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.connectMetamask = this.connectMetamask.bind(this);

    this.state = {
        publicKey: "connect",
        clickConnectButton: false,
        endpoint: "http://localhost:5000/"
    }
    socket = socketIOClient(this.state.endpoint);
  }

connectMetamask = ()=>{
  this.setState({clickConnectButton: true});
  var temp_public_key;
  var web3 = new Web3();
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      window.ethereum.enable().then((res)=> {
        var returnStr = web3.currentProvider.selectedAddress;
        temp_public_key = returnStr;
        console.log("public key is ", temp_public_key);
        var key_short = temp_public_key.slice(0, 6);
        this.setState({publicKey: key_short+"..."})
        // User has allowed account access to DApp...
      });
    } catch (e) {
      // User has denied account access to DApp...
    }
  }
  // Legacy DApp Browsers
  else if (window.web3) {
    // web3 = new Web3(web3.currentProvider);
  }
  // Non-DApp Browsers
  else {
    alert("You have to install MetaMask !");
  }
}
componentWillMount(){
    var temp_public_key;
    var key_short;
    var web3 = new Web3();
    web3 = new Web3(window.ethereum);
      web3.eth.getAccounts((err, accounts)=>{
        if (err != null) console.log("An error occurred");
        else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
        else {
          var returnStr = web3.currentProvider.selectedAddress;
          temp_public_key = returnStr;
          console.log("public key is ", temp_public_key);
          var key_short = temp_public_key.slice(0, 6);
          this.setState({publicKey: key_short+"..."})
        }
    });
    // if (window.ethereum) {

    // }
    // else{
    // }
}

  render() {
    return(
      <div className="header">
        <Navbar expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="/investment">Investment</Nav.Link>
                <Nav.Link href="/dividend">Dividend</Nav.Link> */}
                <Nav.Link href="/#/referral">Referral</Nav.Link>
                <NavDropdown title="Games" id="basic-nav-dropdown" className = "x-nav-dropdown">
                    <NavDropdown.Item href="/#/classic-dice">Dice I</NavDropdown.Item>
                    <NavDropdown.Item href="/#/dice-ii">Dice II</NavDropdown.Item>
                    {/* <NavDropdown.Item href="/#/be-careful">Careful</NavDropdown.Item>
                    <NavDropdown.Item href="/#/dice-ii-2">Farming</NavDropdown.Item> */}
                </NavDropdown>
                </Nav>
                <Form inline>
                    <Button className="loginBtn" onClick = {this.connectMetamask}><LockOpenIcon />{this.state.publicKey}</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export {Header, socket};

