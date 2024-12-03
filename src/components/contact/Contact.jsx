import React from 'react'
import "./contact.css"
import { Col, Container, Row } from 'react-bootstrap'
const Contact = () => {
  return (
    <section className='contact'>
        <Container>
            <Col lg={6} md={6} className='contact-head'>
                <h3>Contact Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </Col>
            <Col lg={10} md={10} className='contact-from'>
                <Row className='justify-content-between'>
                    <Col lg={6} md={6} className='from-left'>
                        <h5>Name</h5>
                        <input placeholder='Enter your name'></input>
                        <h5>Subject</h5>
                        <input placeholder='Provide context'></input>
                        
                    </Col>
                    <Col lg={6} md={6} className='from-right'>
                    <h5>Email</h5>
                        <input placeholder='Enter your Email'></input>
                        <h5>Subject</h5>
                        <input placeholder='Select Subject'></input></Col>
                </Row>
                <Col lg={12} md={12} className='from-down'>
                    <h5>Message</h5>
                    <input placeholder='Write your  question here'></input>
                </Col>
                <a>Send Messege</a>
            </Col>
        </Container>
    </section>
  )
}

export default Contact