import React from 'react'
import "./support.css"
import { Col, Container, Row } from 'react-bootstrap'
const Support = () => {
  return (
    <section className='support'>
        <Container>
            <Row>
                <Col lg={6} md={12} className='support-text'>
                    <h5>24/7 Support</h5>
                    <h4>Working with us, you will be getting 24/7 priority support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </Col>
                <Col lg={{span:5, offset:1}} md={12} className='support-pic'></Col>
            </Row>
        </Container>
    </section>
  )
}

export default Support