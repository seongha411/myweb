import React from "react";
import { Comment, Form, Header, Button, Icon } from "semantic-ui-react";

import human from "./human.png";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={human} />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      commentsList: [],
    };
  }

  render() {
    console.log(this.state.commentsList);
    return (
      <Comment.Group style={{ marginLeft: "300px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        {this.state.commentsList.map(comments => <SingleComment content = {comments}/>)}

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글을 입력해주세요!"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() =>
              this.setState((prevState) => {
                return {
                  commentsList: [...prevState.commentsList, this.state.inputContent],
                };
              })
            }
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
