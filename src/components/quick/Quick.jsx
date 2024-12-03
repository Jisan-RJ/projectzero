import React from 'react'
import "./quick.css"
import { Col, Container, Row } from 'react-bootstrap'
const Quick = () => {
  return (
    <section className='quick'>
    <Container>
        <Row className='justify-content-between'>
            <Col lg={6} md={12} className='quick-pic'></Col>
            <Col lg={{span:5, offset:1}} md={12} className='quick-text'>
                <h5>Quick Delivery</h5>
                <h4>Guranteed 1 week delivery for standard five pager website</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Quick