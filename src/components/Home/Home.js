import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
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

          <div className={`${classes.navlink}`}>
            <span>
              <NavLink
                to={"/repositories"}
                className={`btn btn-secondary mr-4`}
              >
                View Repositories
              </NavLink>
              <a
                href="https://drive.google.com/u/0/uc?id=1otiIMMO_f6RocGzA5tclWkRq9API4_32&export=download"
                className={`btn btn-secondary mr-4`}
              >
                Download CV
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