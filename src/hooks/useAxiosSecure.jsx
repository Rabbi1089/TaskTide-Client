import { useNavigate } from "react-router-dom"
import useAuths from "./useAuths"
import axios from "axios"

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

const useAxiosSecure = () => {
  const { logOut } = useAuths()
  const navigate = useNavigate()
  // interceptor

  //   Response Interceptor
  axiosSecure.interceptors.response.use(
    res => {
    console.log('I am from interceptor');
      return res
    },
    async error => {
      console.log('Error from axios interceptor', error.response)
      if (error.response.status === 401 || error.response.status === 403) {
        await logOut()
        navigate('/login')
      }
      return Promise.reject(error)
    }
  )

  //   Request Interceptor
  //   axios.interceptors.request

  return axiosSecure
}

export default useAxiosSecure
