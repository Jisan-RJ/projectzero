import React from 'react'
import "./process.css"
import { Col, Container, Row } from 'react-bootstrap'
import ProcessRe from '../process-re/ProcessRe'
const Process = () => {
  return (
    <section className='process'>
        <Container>
            <Col lg={12} md={12} className='process-stick'>
                <h2>The process we follow</h2>
                <Row>
                    <ProcessRe title="Planning" line="------------------------------------" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                    <ProcessRe title="Conception" line="------------------------------------" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                    <ProcessRe title="Design" line="------------------------------------" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                    <ProcessRe title="Development" line="------------------------------------" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                </Row>
            </Col>
        </Container>
    </section>
  )
}

export default Process