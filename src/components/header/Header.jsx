import React from 'react'
import "./header.css"
import {Nav, Navbar, Container} from "react-bootstrap"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar expand="lg" className="sticky">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/about">About us</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/features">Features</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/pricing">Pricing</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link href="#link"><Link>Pricing</Link></Nav.Link>
            <button><Link to="/contact">Contact Us</Link></button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header