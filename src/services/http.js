import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com/search/users',
  responseType: 'json',
})

export default instance
