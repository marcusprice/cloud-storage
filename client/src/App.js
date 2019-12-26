import React, { useState, useEffect } from 'react'
import LandingForm from './components/LandingForm'
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
        console.log(result)
        setLoggedIn(result.loggedIn)
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
      output = <h1>Logged In</h1>
    }

    return output
  }

  return (
    handleDisplay()
  )
}

export default App;
