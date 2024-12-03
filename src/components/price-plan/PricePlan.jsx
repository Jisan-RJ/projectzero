import React from 'react'
import "./priceplan.css"
import { Col, Container, Row } from 'react-bootstrap'
const PricePlan = () => {
  return (
    <section className='price-plan'>
        <Container>
            <Col lg={6} md={6} className='price-head'>
                <h3>Our Pricing Plans</h3>
                <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
            </Col>
            <Row className='justify-content-between'>
                <Col lg={4} md={8} className='price-card'>
                    <h3>$299</h3>
                    <h4>Landing Page </h4>
                    <p>When you’re ready to go beyond prototyping in Figma, </p>
                    <ul>
                        <li>All limited links</li>
                        <li>Own analytics platform</li>
                        <li>Chat support</li>
                        <li>Optimize hashtags</li>
                        <li>Unlimited users</li>
                    </ul>
                    <div className='butt'>
                    <a >Get started</a>
                    </div>
                </Col>
                <Col lg={4} md={8} className='price-card middle'>
                    <h3>$399</h3>
                    <h4>Website Page </h4>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
                    <ul>
                        <li>All limited links</li>
                        <li>Own analytics platform</li>
                        <li>Chat support</li>
                        <li>Optimize hashtags</li>
                        <li>Unlimited users</li>
                    </ul>
                    <div className='butt'>
                    <a className='middle-but'>Get started</a>
                    </div>
                </Col>
                <Col lg={4} md={8} className='price-card'>
                    <h3>$499 +</h3>
                    <h4>Complex Project</h4>
                    <p>When you’re ready to go beyond prototyping in Figma, </p>
                    <ul>
                        <li>All limited links</li>
                        <li>Own analytics platform</li>
                        <li>Chat support</li>
                        <li>Optimize hashtags</li>
                        <li>Unlimited users</li>
                    </ul>
                   <div className='butt'>
                   <a >Get started</a>
                   </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PricePlan