import React from "react";
import { Image, Divider, Header, Icon, Button, Grid } from "semantic-ui-react";

import Comments from "./comment.js";

import campusmap from "./campus_map_01.png";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={campusmap} centered />
        </Grid.Row>
        <Grid.Row>
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "2,048",
            }}
          />
          <Button
            basic
            color="blue"
            content="Fork"
            icon="fork"
            label={{
              as: "a",
              basic: true,
              color: "blue",
              pointing: "left",
              content: "2,048",
            }}
          />
        </Grid.Row>
      </Grid>
      <br />

      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment alternate" />
          Comment
        </Header>
      </Divider>
      <Grid centered>
        <Comments />
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
        <Button circular color="facebook" icon="facebook" />
        <Button circular color="twitter" icon="twitter" />
        <Button circular color="youtube" icon="youtube" />
        <Button circular color="google plus" icon="google plus" />
      </Grid>
    </div>
  );
}

export default App;
