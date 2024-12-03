import React from 'react'
import "./work.css"
import one from "../../assets/pointer 1.png"
import two from "../../assets/pointer2.png"
import three from "../../assets/pointer3.png"
import four from "../../assets/pointer4.png"
import { Col, Container, Row } from 'react-bootstrap'
import Workreuse from '../work-reuse/Workreuse'
const Work = () => {
  return (
    <section className='work'>
        <Container>
            <Row>
                <Col lg={4} md={12}>
                    <div className='work-left'>
                        <h3>How we work</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a>Get in touch with us</a>
                    </div>
                </Col>
                <Col lg={{span: 6, offset: 1}} md={12}>
                    <Row>
                    <Workreuse title="Strategy" subtitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."  img={one}/>
                    <Workreuse title="Wireframing" subtitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."  img={two}/>
                    <Workreuse title="Design" subtitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."  img={three}/>
                    <Workreuse title="Development" subtitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."  img={four}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work