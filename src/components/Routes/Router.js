import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = React.lazy(() => import("../../pages/HomePage"));
const AllRepositoryPage = React.lazy(() =>
  import("../../pages/AllRepositoryPage.js")
);
const SingleRepoPage = React.lazy(() =>
  import("../../pages/SingleRepoPage.js")
);
const NotFoundPage = React.lazy(() => import("../../pages/NotFoundPage.js"));

const Router = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Suspense fallback={<div></div>}>
            {" "}
            <NotFoundPage />{" "}
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <Suspense fallback={<div></div>}>
            {" "}
            <HomePage />{" "}
          </Suspense>
        }
      />
      <Route
        path="/repositories"
        element={
          <Suspense fallback={<div></div>}>
            {" "}
            <AllRepositoryPage />{" "}
          </Suspense>
        }
      />
      <Route
        path="/repositories/:reponame"
        element={
          <Suspense fallback={<div></div>}>
            <SingleRepoPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
