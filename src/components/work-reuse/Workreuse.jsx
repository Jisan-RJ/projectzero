import React from 'react'
import "./workreuse.css"
import { Col } from 'react-bootstrap'
const Workreuse = (props) => {
  return (
    <Col lg={6} md={6}>
        <div className='work-reuse'>
        <img src={props.img}></img>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        </div>
    </Col>
  )
}

export default Workreuse