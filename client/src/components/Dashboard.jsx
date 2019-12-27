import React from 'react'

const Dashboard = (props) => {
  const logout = () => {
    fetch('/logout')
      .then(response => response.json())
      .then((result) => {
        if(result.loggedOut) {
          props.setLoginStatus(false)
        }
      })
  }

  return(
    <div>
      <h1>Logged In</h1>
      <button onClick={() => {logout()}}>Logout</button>
    </div>
  )
}

export default Dashboard
