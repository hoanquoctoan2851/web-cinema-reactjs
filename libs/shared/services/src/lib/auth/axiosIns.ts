import axios from 'axios'

const axiosAuthIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: process.env[ 'NEXT_PUBLIC_HOTATO_AUTH_API' ],
  withCredentials: true,
  timeout: 60000,
})


export default axiosAuthIns
