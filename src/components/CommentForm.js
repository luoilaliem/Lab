
import React, { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import {
  Button,
  Col,
  Label,
  Row,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      rate: "",
      comment: "",
      isModalOpen: false,
    };
    this.onSubmitBtn = this.onSubmitBtn.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
  }

  onToggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  onSubmitBtn(values) {
    this.onToggleModal;
    console.log(values);
    this.props.postComment(
      this.props.dishId,
      values.rate,
      values.username,
      values.comment
    );
  }
  render() {
    return (
      <div>
        <div>
          <Button onClick={this.onToggleModal}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </Button>
        </div>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.onToggleModal}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.onSubmitBtn(values)}>
              <Row className="form-group">
                <Label htmlFor="username">User name</Label>
                <Col>
                  <Control.text
                    model=".username"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="User Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".username"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 character",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="rate">Rating</Label>
                <Col>
                  <Control.select
                    model=".rate"
                    id="rate"
                    name="rate"
                    validators={{ required }}
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".rate"
                    show="touched"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment">Your comment</Label>
                <Col>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="commnent"
                    className="form-control"
                    rows="6"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Button
                  type="submit"
                  value="submit"
                  color="primary"
                  className="m-2"
                >
                  Send your comment
                </Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;