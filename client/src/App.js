import React, { useState, useEffect } from 'react'
import LandingForm from './components/LandingForm'
import Dashboard from './components/Dashboard'
import './App.css'

const App = () => {

  //stores user's login status
  const [loggedIn, setLoggedIn] = useState(false)

  //runs once on load to see if the user is logged in
  useEffect(() => {
    //check to see if the user is logged in
    fetch('/loginCheck')
      .then(response => response.json())
      .then((result) => {
        if(result.loggedIn) {
          //if the user is logged in set the logged in state to true
          setLoggedIn(true)
        }
      })
  }, [])

  const setLoginStatus = (status) => {
    setLoggedIn(status)
  }

  //determines what to display based on login status
  const handleDisplay = () => {
    let output
    if(!loggedIn) {
      output = <LandingForm setLoginStatus={setLoginStatus} />
    } else {
      output = <Dashboard setLoginStatus={setLoginStatus} />
    }

    return output
  }

  return (
    handleDisplay()
  )
}

export default App;
