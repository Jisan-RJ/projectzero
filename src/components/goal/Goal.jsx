import React from 'react'
import "./goal.css"
import { Col, Container, Row } from 'react-bootstrap'
const Goal = () => {
  return (
    <section className='goal'>
        <Container>
            <Row className='justify-content-between'>
                <Col lg={{offset:1, span:5}} md={12} className='goal-left'>
                    <h6>Who we are</h6>
                    <h3>Goal focussed</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
                <Col lg={{offset:1, span:5}} md={12} className='goal-right'>
                    <h3>Continuous improvement</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
                
            </Row>
            <Col className='goal-pic' lg={12} md={12}>

            </Col>
        </Container>
    </section>
  )
}

export default Goal