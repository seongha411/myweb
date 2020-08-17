import React from "react";
import { Image, Divider, Header, Icon, Button, Grid } from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./buttons.js";

import campusmap from "./campus_map_01.png";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={campusmap} centered />
        </Grid.Row>
        <Grid.Row>
          <Buttons />
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h4">
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
        <Header as="h4">
          <Icon name="mail" />
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
        <Button circular color="google plus" icon="google plus" onClick = {()=> alert("준비중입니다.")}/ >
      </Grid>
    </div>
  );
}

export default App;
