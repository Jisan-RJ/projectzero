import React from 'react'
import "./myblogre.css"
import { Col } from 'react-bootstrap'
const MyBlogRe = (props) => {
  return (
    <Col lg={4} md={6} className='myblog-card'>
                <img src={props.img}></img>
                <h6>{props.date}</h6>
                <h3>{props.title}</h3>
                <p>{props.para}</p>
                <a>{props.more}</a>
            </Col>
  )
}

export default MyBlogRe