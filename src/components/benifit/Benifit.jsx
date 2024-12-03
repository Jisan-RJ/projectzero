import React from 'react'
import "./benifit.css"
import { Col, Container, Row } from 'react-bootstrap'
import FeatureRe from '../featurereuse/FeatureRe'
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
const Benifit = () => {
  return (
    <section className='benifit'>
        <Container>
        <Col lg={6} className='mission-head'>
                <h3>The benefits of working with us</h3>
            </Col>
            <Col lg={12} md={12}>
                <Row>
                    <FeatureRe title="Customize with ease" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." img={icon1}/>
                    <FeatureRe title="Friendly Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." img={icon3}/>
                    <FeatureRe title="Perfectly Responsive" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." img={icon2}/>
                    <FeatureRe title="Perfectly Responsive" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." img={icon2}/>
                    <FeatureRe title="Perfectly Responsive" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." img={icon2}/>
                    <FeatureRe title="Perfectly Responsive" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." img={icon2}/>
                </Row>
            </Col>
        </Container>
    </section>
  )
}

export default Benifit