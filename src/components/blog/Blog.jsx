import React from 'react'
import "./blog.css"
import { Col, Container, Row } from 'react-bootstrap'
import BlogRe from '../blog-reuse/BlogRe'
import bo1 from "../../assets/bo1.png"
import bo2 from "../../assets/bo2.png"
import bo3 from "../../assets/bo3.png"
const Blog = () => {
  return (
    <section className='blog'>
        <Container>
            <Col lg={12} md={12}>
                <Row>
                    <BlogRe title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" date="19 Jan 2022" img={bo1} para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More"/>
                    <BlogRe title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" date="19 Jan 2022" img={bo2} para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More"/>
                    <BlogRe title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" date="19 Jan 2022" img={bo3} para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More"/>
                </Row>
            </Col>
        </Container>
    </section>
  )
}

export default Blog