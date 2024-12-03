import React from 'react'
import "./featurere.css"
import { Col } from 'react-bootstrap'
const FeatureRe = (props) => {
  return (
    <Col lg={4} md={6} className='cards'>
        <img src={props.img}></img>
        <h4>{props.title}</h4>
        <p>{props.para}</p>
    </Col>
  )
}

export default FeatureRe