import React from 'react'
import "./mission.css"
import { Col, Container, Row } from 'react-bootstrap'
const Mission = () => {
  return (
    <section className='mission'>
        <Container>
          
            <Row className='justify-content-between'>
                <Col lg={6} md={12} className='mission-text'>
                    <h6>Our Mission </h6>
                    <h4>Inspire, Innovate, Share</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
                <Col lg={{offset:1 , span:5}} md={12} className='mission-pic'></Col>
            </Row>


            <Row className='justify-content-between mission-down'>
                
                <Col lg={6} md={12} className='mission-pic2'></Col>
                <Col lg={{span:5, offset:1}} md={12} className='mission-text'>
                    <h6>Our Vision </h6>
                    <h4>Laser focus</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Mission