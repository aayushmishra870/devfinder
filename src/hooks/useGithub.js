import { useState } from "react"
import axios from "axios"

function useGithub() {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchUser(username) {
    setLoading(true)
    setError(null)
    setUser(null)
    setRepos([])

    try {
      const userRes = await axios.get(
        `https://api.github.com/users/${username}`
      )
      const reposRes = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=stars&per_page=6`
      )
      setUser(userRes.data)
      setRepos(reposRes.data)
    } catch (err) {
      setError("User nahi mila! Username check karo.")
    } finally {
      setLoading(false)
    }
  }

  return { user, repos, loading, error, fetchUser }
}

export default useGithub