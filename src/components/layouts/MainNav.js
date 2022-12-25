import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import classes from "./MainNav.module.css";
import SearchBar from "./SearchBar";
import ProfileImage from "../../assets/profile.jpg";

const MainNav = ({ pathname }) => {
  const [hideNav, setHideNav] = useState(false);
  const onHideNav = () => {
    setHideNav(true);
  };

  const showNav = () => {
    setHideNav(false);
  };


  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={ProfileImage}
              width="30"
              height="30"
              className={`d-inline-block align-top ${classes.img}`}
            />{" "}
            <span className={hideNav ? classes.hide : " "}>GitHub-Repo</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to={"/"}>
                {" "}
                <span
                  className={`${classes.link} ${hideNav ? classes.hide : " "} ${pathname === "/" ? classes.active : ""}`}
                >
                  Home
                </span>
              </NavLink>
              <NavLink to={"/repositories"}>
                <span
                  className={`${classes.link2} ${hideNav ? classes.hide : " "} ${pathname === "/repositories" ? classes.active : ""} ${pathname === `/repositories/${pathname.split("/")[2]}` ? classes.active : ""}`}
                >
                  Repos
                </span>
              </NavLink>
            </Nav>
            <SearchBar onHideNav={onHideNav} onShowNav={showNav} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
