import React from 'react'
import "./banner3.css"
import ban3 from "../../assets/banner3.svg"
import { Col, Container, Row } from 'react-bootstrap'
const Banner3 = () => {
  return (
    <section className='banner3'>
        <Container>
            <Row className='justify-content-between'>
                <Col lg={5} md={12}>
                    <div className='ban3-text'>
                        <h1>All the features you need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className='yellow-btn'>View Pricing</a>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className='ban3-img'>
                        <img src={ban3}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner3