import React from 'react';
import {Button, Progress, Input} from 'semantic-ui-react'

function Login2() {
  return(
    <div>
    <Input/>
    <Button onClick = { (e) => {
      console.log(e)
      alert(e.target.value)
    }}> 로그인 </Button>
    </div>
  )
}

class Login extends React.Component {

  render(){
    return(
      <div>
      <Input/>
      <Button onClick = { (e) => {
        console.log(e)
        alert(e.target.value)
      } } > Login </Button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <p> 안녕하세요!! </p>
      <Button primary> 하이하이~ </Button>
      <Progress percent = {90} indicating/>
      <Login / >
    </div>
  );
}

export default App;
