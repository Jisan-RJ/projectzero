import React from 'react'
import "./free.css"
import { Col, Container, Row } from 'react-bootstrap'
const Free = () => {
  return (
    <section className='free'>
        <Container>
            <Row className='justify-content-between'>
                <Col lg={6} md={12} className='free-pic'></Col>
                <Col lg={{span:5, offset:1}} md={12} className='free-text'>
                    <h5>Free Revision Rounds</h5>
                    <h4>Get free Revisions and one week of free maintenance</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Free