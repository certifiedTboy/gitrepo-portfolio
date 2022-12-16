import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SkillSets from "../UI/SkillSets"
import classes from "./Home.module.css"



const Home = () => {
  return <Container fluid className={`${classes.overlay}`}>
    <div>
      <Row>

        <Col md={2} lg={12}>

        </Col>
        <Col md={8} lg={12} className="text-center">
          <div className={classes.title}>
            <h4 className={classes.text}>
              <strong>GITHUB REPOSITORIES PORTFOLIO </strong>
            </h4>
            <h3 className={classes.qualif}>
              <strong>Emmanuel Tosin Adebisi <span>(MERN Stack Developer)</span></strong>
            </h3>
          </div>
          <div className={classes.skillsHeading}>
            <h1 >
              SKILLS SET
            </h1>
          </div>
          <SkillSets />

          <div>
            <span>
              <a
                href={"/repositories"}
                className={`${classes.navlink} btn btn-secondary mr-4`}
              >
                View Repositories
              </a>

            </span>
          </div>
        </Col>
        <Col md={2} lg={12}>

        </Col>

      </Row>
    </div>
  </Container>
}



export default Home