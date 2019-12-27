import React from 'react'
import { DashboardContainer } from './atoms'
import Directory from './Directory'

const Dashboard = (props) => {
  // const logout = () => {
  //   fetch('/logout')
  //     .then(response => response.json())
  //     .then((result) => {
  //       if(result.loggedOut) {
  //         props.setLoginStatus(false)
  //       }
  //     })
  // }

  return(
    <DashboardContainer>
      <Directory />
    </DashboardContainer>
  )
}

export default Dashboard
