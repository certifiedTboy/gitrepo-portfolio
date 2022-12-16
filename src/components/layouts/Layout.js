import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Layout.module.css";
import MainNav from "./MainNav";
import { seo } from "../../helpers/seo";

const Layout = (props) => {
  const location = useLocation();
  const { pathname } = location;

  let titleData;

  if (pathname === "/") {
    titleData = {
      title: "Git Repo - Home",
      metaDescription: "Home page of Aramiidey's git repositories porfolio",
    };
  } else if (pathname === "/repositories") {
    titleData = {
      title: "Git Repo - certifiedTboy/Repositories",
      metaDescription: "Git repositories of Aramiidey",
    };
  } else if (pathname === `/repositories/${pathname.split("/")[2]}`) {
    titleData = {
      title: `Git Repo - certifiedTboy/${pathname.split("/")[2]}`,
      metaDescription: `Basic information about ${pathname.split("/")[2]
        } git repository`,
    };
  } else {
    titleData = {
      title: "404 - Error",
      metaDescription: "Page not found",
    };
  }

  seo(titleData);

  return (
    <Fragment>
      <MainNav pathname={pathname} />
      <main className={pathname === "/" ? classes.main2 : classes.main}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
