import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Repolists.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import GitHubImg from "../../assets/githubimage.png";
import CryingEmoji from "../../assets/cryingemoji.png";
import Pagination from "../Pagination/Pagination";

const RepoLists = ({ repos, isLoading, errorMessage }) => {
  //data calculation for page pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  let currentRecords;
  let nPages;

  if (!repos.error && repos.length > 0) {
    currentRecords = repos.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(repos.length / recordsPerPage);
  } else {
    currentRecords = [];
    nPages = [];
  }

  const repoData = (
    <Row>
      {!repos.error &&
        repos.length > 0 &&
        currentRecords.map((repo) => {
          return (
            <Col key={repo.id} lg={4} md={6} sm={6} xs={12} xl={4} className={`${classes.repoMargin} centered`}>
              <Card className={`${classes.card}`}>
                <Card.Img variant="top" src={GitHubImg} />
                <Card.Body>
                  <Card.Title>{repo.name}</Card.Title>
                  <p>
                    <span style={{ fontWeight: "600" }}>
                      {new Date(repo.created_at).toDateString()}
                    </span>
                  </p>
                  <Card.Text className={classes.repoText}>
                    {repo.description
                      ? repo.description
                      : "Description for this repository is not provided yet, view more details using the button below"}
                  </Card.Text>
                  <NavLink
                    to={`/repositories/${repo.name}`}
                    variant="warning"
                    className={`btn btn-lg ${classes.navlink}`}
                  >
                    {" "}
                    View Details
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );

  const errorData = (
    <Row>
      <Col lg={3} md={2} xs={12}></Col>
      <Col lg={6} md={8} xs={12} className="text-center">
        <h1 className={`centered ${classes.error}`}>{errorMessage}</h1>
        <div>
          <img src={CryingEmoji} className={`${classes.emoji} centered`} alt="github repository logo" />
        </div>
      </Col>
      <Col lg={3} md={2} xs={12}></Col>
    </Row>
  );

  const repoLoading = (
    <Row>
      <div className={`centered ${classes.loadspinner}`}>
        <LoadingSpinner />
      </div>
    </Row>
  );

  return (
    <Container className={`${classes.overlay} px-5`} fluid>
      {isLoading === true && repoLoading}
      {repos && repos.length > 0 && repoData}
      {repos.error && errorMessage && errorData}

      {nPages > 0 && (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
};

export default RepoLists;
