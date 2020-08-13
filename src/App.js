import React from 'react';
import {Button, Progress, Input} from 'semantic-ui-react'

function Login() {
  return(
    <div>
    <Input/>
    <Button primary> 로그인 </Button>
    </div>
  )
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
