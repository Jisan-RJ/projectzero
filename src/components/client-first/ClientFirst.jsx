import React from 'react'
import "./clientfirst.css"
import { Col, Container, Row } from 'react-bootstrap'
const ClientFirst = () => {
  return (
    <section className='client-f'>
        <Container>
            <Row>
                <Col lg={6} md={12} className='client-f-text'>
                    <h5>Use Client-first</h5>
                    <h4>Top agencies and freelancers around the world use 
                    Client-first </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </Col>
                <Col lg={{span:5, offset:1}} md={12} className='client-f-pic'></Col>
            </Row>
        </Container>
    </section>
  )
}

export default ClientFirst