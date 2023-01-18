import axios from 'axios'


    const githubUrl = process.env.REACT_APP_GITHUBURL
    const token = process.env.REACT_APP_MYGITHUB_TOKEN

    const github = axios.create({
        baseURL: githubUrl,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    export const searchUsers = async (text) => {

        const params = new URLSearchParams({
            q: text
        })

        const {data} = await github.get(`/search/users?${params}`)
        return data.items
      }

      export const getUserAndRepos = async(login) => {

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
          })

        const [user, repos] = await Promise.all([
            github.get(`/users/${login}`),
            github.get(`/users/${login}/repos?${params}`)
        ])

        return {user: user.data, repos: repos.data}
      }
  


