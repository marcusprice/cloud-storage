import styled from 'styled-components'

//layout styles

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  background: #fff;
  width: 500px;
  border-radius: 15px;
  padding: 32px 64px;
`

export const LoginFormTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #333;
  margin-bottom: 32px;
`

export const LoginForm = styled.form`
  width: 100%;
`

export const LoginLabelBlock = styled.label`
  display: block;
  font-family: 'Lato', sans-serif;
  color: #555;
`

export const LoginLabel = styled.label`
  font-family: 'Lato', sans-serif;
`

export const LoginInput = styled.input`
  color: #333;
  display: block;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 32px;
  font-size: 16px;
  padding: 16px 8px;
  border-radius: 10px;
  border: solid #ccc 1px;
  font-weight: 300;
`

export const LoginFormSubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
`

/*TODO: make this a slider*/
export const LoginCheckbox = styled.input`
  color: #333;
`

export const LoginSubmit = styled.input`
  width: 200px;
  font-size: 16px;
  padding: 16px 8px;
  border: solid #ccc 1px;
  border-radius: 10px;
  cursor: pointer;
  color: #eee;
  font-family: 'Lato', sans-serif;
  background: #999;
`

//typeography styles

export const PageTitle = styled.h1`
  margin: 0; padding: 0;
  font-weight: 700;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 24px;
  color: #333;
  margin-left: 16px;
`
