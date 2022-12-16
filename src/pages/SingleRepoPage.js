import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSingleRepo, getAllRepos } from "../lib/RepoApi"
import SingleRepo from "../components/Repos/SingleRepo"


const SingleRepoPage = () => {
    const [singleRepo, setSingleRepo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [allRepos, setAllRepos] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const params = useParams()
    const { reponame } = params




    const onGetAllRepos = async () => {
        const response = await getAllRepos()
        setAllRepos(response)
    }

    useEffect(() => {
        const onGetSingleRepo = async () => {
            setIsLoading(true)
            try {
                const response = await getSingleRepo(reponame)

                if (!response) {
                    setIsLoading(false)
                    setErrorMessage("something went wrong")
                }

                if (response.error) {
                    setIsLoading(false)
                    setErrorMessage(response.error)
                }

                setIsLoading(false)
                setSingleRepo(response)

            } catch (error) {
                setIsLoading(false)
            }

        }

        onGetSingleRepo()
        onGetAllRepos()
    }, [reponame])

    return <div>
        <SingleRepo repoData={singleRepo} errorMessage={errorMessage} isLoading={isLoading} allRepos={allRepos} />
    </div>
}





export default SingleRepoPage