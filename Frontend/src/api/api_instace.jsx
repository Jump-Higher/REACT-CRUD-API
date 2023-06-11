import axios from 'axios'

const instance = axios.create({
  // baseURL: "http://13.239.136.211/blog-api/v1/",
  baseURL: import.meta.env.VITE_SOME_KEY,
  headers: {
    //  Authorization: `<Your Auth Token>`,
    // "Content-Type": "application/json",
    'Content-Type': 'multipart/form-data',
    timeout: 1000,
  },
  // .. other options
})

export default instance
