import React, { useState } from 'react';
import {
  Container, LoginContainer, LoginCard, LoginFormTitleContainer,
  PageTitle, LoginForm, LoginLabelBlock, LoginLabel, LoginInput, LoginCheckbox,
  LoginSubmit, LoginFormSubContainer
} from './atoms'
import cloudIcon from '../assets/icons/cloud-icon.png'

const LandingForm = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [rememberMe, setRememberMe] = useState(false)

  //logs user in
  const login = (event) => {
    event.preventDefault()
    console.log({email: email, password: password, rememberMe: rememberMe})
    //endpoint requires email & password
    //fetch('/login', {method: 'POST'})
  }

  return(
    <Container>
      <LoginContainer>
        <LoginCard>
          <LoginFormTitleContainer>
            <img src={cloudIcon} alt="cloud icon" />

            <PageTitle>Cloud Storage</PageTitle>
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
                <LoginCheckbox value={rememberMe} type="checkbox" onChange={(event) => {setRememberMe(event.target.value)}} />
              </LoginLabel>
              <LoginLabel>
                <LoginSubmit type="submit" value="Login" />
              </LoginLabel>
            </LoginFormSubContainer>
          </LoginForm>
        </LoginCard>
      </LoginContainer>
    </Container>
  )
}

export default LandingForm
