export const getAllRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/certifiedTboy/repos`)
    if (!response.ok) {
      return ({ error: "Something went wrong" })
    }
    const data = response.json()
    return data
  } catch (error) {
    return ({ error: "Something went wrong" })
  }

}


export const getSingleRepo = async (repoName) => {
  try {
    const response = await fetch(`https://api.github.com/repos/certifiedTboy/${repoName}`)
    if (!response.ok) {
      return ({ error: "something went wrong" })
    }
    const data = await response.json()

    return data
  } catch (error) {

    return ({ error: "something went wrong" })

  }
} 