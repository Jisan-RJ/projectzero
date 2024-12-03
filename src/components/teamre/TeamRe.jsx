import React from 'react'
import "./teamre.css"
import { Col } from 'react-bootstrap'
const TeamRe = (props) => {
  return (
    <Col lg={3} md={6} className='team-card'>
    <img src={props.img}></img>
    <h5>{props.titel}</h5>
    <h6>{props.para}</h6>
    </Col>
  )
}

export default TeamRe