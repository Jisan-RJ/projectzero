import React from 'react'
import "./myblog.css"
import { Col, Container, Row } from 'react-bootstrap'
import MyBlogRe from '../myblogre/MyBlogRe'
import abc from "../../assets/abc.png"
import def from "../../assets/def.png"
import ghi from "../../assets/ghi.png"
import jkl from "../../assets/jkl.png"
import mno from "../../assets/mno.png"
import pqr from "../../assets/pqr.png"
const MyBlog = () => {
  return (
    <section className='my-blog'>
        <Container>
            <div className='my-head'>
              <h3>Our Blog</h3>
            </div>
            <Col lg={12} md={12}>
            <Row className='justify-content-between'>
            
            <MyBlogRe date="27 Jan 2021" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More" img={abc}/>
            <MyBlogRe date="27 Jan 2021" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More" img={def}/>
            <MyBlogRe date="27 Jan 2021" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More" img={ghi}/>
            <MyBlogRe date="27 Jan 2021" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More" img={jkl}/>
            <MyBlogRe date="27 Jan 2021" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More" img={mno}/>
            <MyBlogRe date="27 Jan 2021" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" more="Read More" img={pqr}/>
       
    </Row>
            </Col>
        </Container>
    </section>
  )
}

export default MyBlog