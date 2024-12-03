import React from 'react'
import "./blogre.css"
import { Col } from 'react-bootstrap'
const BlogRe = (props) => {
  return (
    <Col lg={4} md={12} className='blog-card'>
        <img src={props.img}></img>
        <h6>{props.date}</h6>
        <h4>{props.title}</h4>
        <p>{props.para}</p>
        <a>{props.more}</a>
    </Col>
  )
}

export default BlogRe