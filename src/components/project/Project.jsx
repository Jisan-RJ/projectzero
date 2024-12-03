import React from 'react'
import "./project.css"
import { Col, Container, Row } from 'react-bootstrap'
import pro1 from "../../assets/pro1.png"
import pro2 from "../../assets/pro3.png"
import pro3 from "../../assets/pro2.png"
const Project = () => {
  return (
    <section className='project'>
        <Container>
            <div className='pro-head'>
              <h3>View our projects</h3>
              <a>View More</a>
            </div>
            <Row className='justify-content-between'>
                <Col lg={8} md={12} className='pro-left'>
                  <img src={pro1}></img>
                </Col>
                <Col lg={4} md={12} className='pro-right'>
                  <div className='pro-right-f'>
                  <Col lg={12} md={6} className='pro-right-up'>
                    <img src={pro2}></img>
                  </Col>
                  <Col lg={12} md={6} className='pro-right-down'>
                    <img src={pro3}></img>
                  </Col>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Project