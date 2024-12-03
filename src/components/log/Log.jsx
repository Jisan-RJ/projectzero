import React from 'react'
import "./log.css"
import { Col, Container, Row } from 'react-bootstrap'
const Log = () => {
  return (
    <section className='log'>
        <Container>
            <Row>
                <Col lg={6} md={12} className='log-left'>
                    <Col lg={10} className='log-left-text'>
                    <h3>Building stellar websites for early startups</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </Col>
                </Col>
                <Col lg={6} md={12} className='log-right'>
                    <Col lg={{offset:2,span:10}} md={12}>
                        <h5>Send inquiry</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <div className='inputs'>
                        <input placeholder='Your Name'></input>
                        <input placeholder='Email'></input>
                        <input placeholder='Paste your Figma design URL'></input>
                        
                        </div>
                        <a className='but'>Send an Inquiry</a>
                        <a className='sub-but'>Get in touch with us</a>
                    </Col>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Log