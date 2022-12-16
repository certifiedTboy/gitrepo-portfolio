import React, { useState, useEffect } from "react";
import RepoLists from "../components/Repos/RepoLists";
import { getAllRepos} from "../lib/RepoApi";

const AllRepositoryPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [allRepos, setAllRepos] = useState([]);

  const onGetRepos = async () => {
    setIsLoading(true)
    try{
      const response = await getAllRepos();
      if(response.error){
        setIsLoading(false)
        setErrorMessage(response.error)
      }
      if(response.length < 0){
        setIsLoading(false)
        setErrorMessage("No repo found")
      }

      setIsLoading(false)
      setAllRepos(response)
    }catch(error){
      setErrorMessage(error)
    }
    
  };

  useEffect(() => {
    onGetRepos();
  }, []);

  return <RepoLists repos={allRepos} errorMessage={errorMessage} isLoading={isLoading}/>
};

export default AllRepositoryPage;
