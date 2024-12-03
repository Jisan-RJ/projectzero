import React from 'react'
import "./banner2.css"
import ban2 from "../../assets/banner2.png"
import { Col, Container, Row } from 'react-bootstrap'
const Banner2 = () => {
  return (
    <section className='banner2'>
        <Container>
            <Row className='justify-content-between'>
                <Col lg={5} md={12}>
                    <div className='ban2-text'>
                        <h5>About us</h5>
                        <h1>Our designs solve problems</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </Col>
                <Col lg={5} md={12}>
                    <div className='ban2-img'>
                    <img src={ban2}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner2