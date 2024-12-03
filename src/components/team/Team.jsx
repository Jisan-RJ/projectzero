import React from 'react'
import "./team.css"
import { Col, Container, Row } from 'react-bootstrap'
import TeamRe from '../teamre/TeamRe'
import team1 from "../../assets/team1.png"
import team2 from "../../assets/team2.png"
import team3 from "../../assets/team3.png"
import team4 from "../../assets/team4.png"
const Team = () => {
  return (
    <section className='team'>
        <Container>
          <div className='team-head'> 
            <h3>Meet our team</h3>
          </div>
          <Col lg={12} md={12}>
            <Row className='justify-content-between'>
              <TeamRe titel="John Smith" para="CEO" img={team1}/>
              <TeamRe titel="Simon Adams" para="CTO" img={team2}/>
              <TeamRe titel="Paul Jones" para="Design Lead" img={team3}/>
              <TeamRe titel="Sara Hardin" para="Project Manager" img={team4}/>
            </Row>
          </Col>
        </Container>
    </section>
  )
}

export default Team