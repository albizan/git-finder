import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
})

export default instance
