import React, { useState, useContext, useEffect } from 'react'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
//REACT_APP_MOVIE_API_KEY this key is private so i have define it in .env file , which will be later ignored by git (ajitmjindia701)
console.log(API_ENDPOINT)
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
