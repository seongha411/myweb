import React from "react";
import firebase from "firebase";
import {
  Image,
  Divider,
  Header,
  Icon,
  Button,
  Grid,
  Menu,
  Input,
} from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./buttons.js";
import auth from "./fb.js";

import kbmaru from "./kbmaru.gif";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "방문자",
    };
  }
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <h2 style={{ color: "white", textAlign: "center", paddingTop: "15px" }}>
          {" "}
          SeongHa's Web{" "}
        </h2>
        <Menu inverted widths={3}>
          <Menu.Item> Menu </Menu.Item>
          <Menu.Item> {`반가워요, ${this.state.userName}님!`} </Menu.Item>
          <Menu.Item
            onClick={() => {
              firebase
                .auth()
                .signInWithPopup(provider)
                .then(function (result) {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                  return user.displayName;
                  // ...
                })
                .then((result) => this.setState({ userName: result }))
                .catch(function (error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                  // ...
                });
            }}
          >
            {" "}
            Login{" "}
          </Menu.Item>
        </Menu>
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            My Project
          </Header>
        </Divider>
        <Grid centered>
          <Grid.Row>
            <Image src={kbmaru} centered size='huge'/>
          </Grid.Row>
          <Grid.Row>
            <Buttons />
          </Grid.Row>
        </Grid>

        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="comment alternate" />
            Comment
          </Header>
        </Divider>

        <Grid centered columns={3}>
          <Grid.Column>
            <Comments />
          </Grid.Column>
        </Grid>

        <br />
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="mail" style={{ color: "white" }} />
            Contact Me
          </Header>
        </Divider>
        <br />
        <Grid centered>
          <Button
            circular
            color="facebook"
            icon="facebook"
            onClick={() => window.open("https://fb.me/seongha411")}
          />
          <Button
            circular
            color="instagram"
            icon="instagram"
            onClick={() => window.open("https://instagram.com/seongha411")}
          />
          <Button
            circular
            color="youtube"
            icon="youtube"
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCRecMBqmukRIHqMpI1Tqa1Q"
              )
            }
          />
          <Button
            circular
            color="google plus"
            icon="google plus"
            onClick={() => alert("준비중입니다.")}
          />
        </Grid>
      </div>
    );
  }
}
export default App;
