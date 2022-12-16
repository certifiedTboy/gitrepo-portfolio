import React, { useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getAllRepos } from "../../lib/RepoApi";
import classes from "./SearchBar.module.css";

const SearchBar = ({ onHideNav, onShowNav }) => {
  const [searchData, setSearchData] = useState("");
  const [searchError, setSearchError] = useState("");
  const [searchedRepo, setSearchedRepo] = useState([]);
  const [fetchedRepo, setFetchedRepo] = useState([]);


  //hide other nav menus on mobile while searching repo
  const onFocusToSearchInput = () => {
    onHideNav()
  }

  //display other nav menus after searching
  const onUnfocusToSearchInput = () => {
    onShowNav()
  }


  // change search input data handler function
  const onChangeSearchDataHandler = (event) => {
    setSearchData(event.target.value);
    setSearchError("");
  };


  // filter repo by searchData function
  const filterFetchedRepo = useCallback(async (data) => {
    const filterRepo = fetchedRepo.filter((repo) => repo.name.includes(data));
    setSearchedRepo(filterRepo);
  }, [fetchedRepo]);



  // search for repo function
  const onSearchRepo = useCallback(async () => {
    try {
      const response = await getAllRepos();
      if (response.error) {
        return setSearchError(response.error);
      }

      if (response.length === 1) {
        return setSearchError("No repo found");
      }

      setFetchedRepo(response);
      filterFetchedRepo(searchData);
    } catch (error) { }
  }, [filterFetchedRepo, searchData]);


  // clear timeout function
  useEffect(() => {
    const identifyer = setTimeout(() => {
      onSearchRepo();
    }, 2000);

    return () => {
      clearTimeout(identifyer);
    };
  }, [searchData, onSearchRepo]);


  let searchResult;

  const onClearSearchData = () => {
    setSearchData("");
    searchResult = <div></div>;
  };

  if (searchError) {
    searchResult = <p className={`${classes.anchorTag}`}>{searchError}</p>;
  }

  if (!searchData || searchData.trim().length === 0) {
    searchResult = <div></div>;
  }

  if (searchData && searchedRepo.length === 0) {
    searchResult = <p className={`${classes.anchorTag}`}>No repo found</p>;
  }

  if (searchData && searchedRepo && searchedRepo.length > 0) {
    searchResult = searchedRepo.map((repo) => {
      return (
        <NavLink
          key={repo.id}
          to={`/repositories/${repo.name}`}
          className={`${classes.anchorTag}`}
          onClick={onClearSearchData}
        >
          {repo.name}
        </NavLink>
      );
    });
  }


  return (
    <>
      <Form className="d-flex">
        <Form.Control
          value={searchData}
          type="search"
          placeholder="Search for Repos"
          aria-label="Search"
          onChange={onChangeSearchDataHandler}
          onFocus={onFocusToSearchInput}
          onBlur={onUnfocusToSearchInput}
        />
        <div className={classes.dropdownContent}>{searchResult}</div>
      </Form>
    </>
  );
};

export default SearchBar;
