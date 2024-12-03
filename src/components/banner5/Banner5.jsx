import React from 'react'
import "./banner5.css"
import ban5 from "../../assets/ban5.png"
import { Col, Container, Row } from 'react-bootstrap'
const Banner5 = () => {
  return (
    <section className='banner5'>
        <Container>
            
                <div className='ban5-text'>
                <Row className='justify-content-center'>
                    <Col lg={8} md={8} className='ban-head'>
                    <h1>A UX Case Study on Creating a Studious Environment for Students</h1>
                    </Col>
                    <p className='andrew'>Andrew Jonson
                    Posted on 27th January 2021</p>
                    <Col lg={12} md={12} className='ban5-img'>
                        <img src={ban5}></img>
                    </Col>
                    <Col lg={8}>
                    <p className='post'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                    </Col>
                    <a>Read more</a>
                </Row>
                </div>
            
        </Container>
    </section>
  )
}

export default Banner5