import React from 'react'
import "./banner4.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Col, Container } from 'react-bootstrap'
const Banner4 = () => {
  return (
    <section className='banner4'>
        <Container>
            <div className='ban4-text'>
                <h5>What we created</h5>
                <h1>Our Work Portfolio</h1>
                <Col lg={8} className='para'>
                <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                </Col>
                <a><FaFacebook /></a>
                    <a><FaTwitter /></a>
                    <a><FaInstagram /></a>
                    <a><FaLinkedin /></a>
            </div>
        </Container>
    </section>
  )
}

export default Banner4