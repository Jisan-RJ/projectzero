import React from 'react'
import "./processre.css"
import { Col } from 'react-bootstrap'
const ProcessRe = (props) => {
  return (
    <Col lg={3} md={6} className='process-card'>
        <h6>{props.line}</h6>
        <h4>{props.title}</h4>
        <p>{props.para}</p>
    </Col>
  )
}

export default ProcessRe