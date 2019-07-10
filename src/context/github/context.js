import { createContext } from 'react'

const GithubContext = createContext()

export default GithubContext
export const Provider = GithubContext.Provider
export const Consumer = GithubContext.Consumer
