import React from 'react'
import "./banner.css"
import ban from "../../assets/banner.png"
import { Col, Container, Row } from 'react-bootstrap'
const Banner = () => {
  return (
    <section className='banner'>
        <Container>
            <Row className='justify-content-between'>
                <Col lg={5} md={12}>
                    <div className='ban-text'>
                        <h1>Building stellar websites for early startups</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <a className='yellow-btn'>View our work</a>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className='ban-img'>
                        <img src={ban}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner