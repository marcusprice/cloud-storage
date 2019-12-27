import React, { useState } from 'react';
import {
  LoginContainer, LoginCard, LoginFormTitleContainer, LoginTitle, LoginForm,
  LoginLabelBlock, LoginLabel, LoginInput, LoginCheckbox, LoginSubmit,
  LoginFormSubContainer
} from './atoms'
import cloudIcon from '../assets/icons/cloud-icon.png'

const LandingForm = (props) => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [rememberMe, setRememberMe] = useState(false)

  //logs user in
  const login = (event) => {
    //prevent page reload
    event.preventDefault()

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password, rememberMe: rememberMe })
    })
      .then(response => response.json())
      .then((result) => {
        console.log(result)
        if(result.loggedIn) {
          //if the user was validated set login status to true in parent component
          props.setLoginStatus(true)
        }
      })
  }

  return(
    <LoginContainer>
      <LoginCard>
        <LoginFormTitleContainer>
          <img src={cloudIcon} alt="cloud icon" />
          <LoginTitle>Cloud Storage</LoginTitle>
        </LoginFormTitleContainer>
        <LoginForm onSubmit={login}>
          <LoginLabelBlock>
            Email
            <LoginInput value={email} type="email" onChange={(event) => {setEmail(event.target.value)}} />
          </LoginLabelBlock>
          <LoginLabelBlock>
            Password
            <LoginInput value={password} type="password" onChange={(event) => {setPassword(event.target.value)}} />
          </LoginLabelBlock>
          <LoginFormSubContainer>
            <LoginLabel>
              Remember Me
              <LoginCheckbox
                checked={rememberMe}
                type="checkbox"
                onChange={(event) => {setRememberMe(event.target.checked)}}
              />
            </LoginLabel>
            <LoginLabel>
              <LoginSubmit type="submit" value="Login" />
            </LoginLabel>
          </LoginFormSubContainer>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  )
}

export default LandingForm
