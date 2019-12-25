import React from 'react';
import {
  Container, LoginContainer, LoginCard, LoginFormTitleContainer,
  PageTitle, LoginForm, LoginLabelBlock, LoginLabel, LoginInput, LoginCheckbox,
  LoginSubmit, LoginFormSubContainer
} from './components/atoms'
import './App.css'
import cloudIcon from './assets/icons/cloud-icon.png'

const App = () => {
  return (
    <Container>
      <LoginContainer>
        <LoginCard>
          <LoginFormTitleContainer>
            <img src={cloudIcon} alt="cloud icon" />

            <PageTitle>Cloud Storage</PageTitle>
          </LoginFormTitleContainer>
          <LoginForm>
            <LoginLabelBlock>
              Email
              <LoginInput type="email"/>
            </LoginLabelBlock>
            <LoginLabelBlock>
              Password
              <LoginInput type="password"/>
            </LoginLabelBlock>
            <LoginFormSubContainer>
              <LoginLabel>
                Remember Me
                <LoginCheckbox type="checkbox"/>
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

export default App;
