import React from "react";
import firebase from "firebase";
import { Modal, Header, Image, Button } from "semantic-ui-react";

class VisitorsModal extends React.Component {

  render() {
    return (
      <Modal open={this.props.isOpen}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src="/images/avatar/large/rachel.png" wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => alert(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => alert(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default VisitorsModal;
