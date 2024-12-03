import React from 'react'
import "./feature.css"
import { Col, Container, Row } from 'react-bootstrap'
import five from "../../assets/fivee.png"
import six from "../../assets/six.png"
import seven from "../../assets/seven.png"
import eight from "../../assets/eight.png"
import nine from "../../assets/nine.png"
import ten from "../../assets/ten.png"
import FeatureRe from '../featurereuse/FeatureRe'
const Feature = () => {
  return (
    <section className='feature'>
        <Container>
            <Col lg={6} className='f-head'>
                <h5>Features</h5>
                <h3>Design that solves problems, one product at a time</h3>
            </Col>
            <Col lg={12} md={12}>
                <Row className='justify-content-between'>
                    <FeatureRe title="Uses Client First"  para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "  img={five}/>
                    <FeatureRe title="Two Free Revision Round" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "  img={six} />
                    <FeatureRe title="Template Customization"  para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "  img={seven}/>
                    <FeatureRe title="24/7 Support"  para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "  img={eight}/>
                    <FeatureRe title="Quick Delivery"  para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "  img={nine}/>
                    <FeatureRe title="Hands-on approach"  para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "  img={ten}/>
                </Row>
            </Col>
            <Row className='justify-content-between client'>
                <Col lg={4} md={12}>
                    <h3>What our clients say about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </Col>
                <Col lg={7} md={12}>
                    <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature