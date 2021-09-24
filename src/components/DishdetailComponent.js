import React, { useState } from 'react';

import dateFormat from 'dateformat';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import {

    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from './shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish(props) {

    return (
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <Card>
            <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
            <CardTitle>{props.dish.name}</CardTitle>
        </Card>
        </FadeTransform>
    );
}
function RenderComments({ comments, postComment, dishId }) {
    return (
        <div className="col-12 col-md-6 m-1">
            <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
            <CommentForm dishId={dishId} postComment={postComment} />


        </div>
    )
}




const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {

        const selectedDishes = props.dish;
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{selectedDishes.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{selectedDishes.name}</h3>
                        <hr />
                    </div>
                    {/* <img src={selectedDishes.image} />
                    <p>description: {selectedDishes.description}</p> */}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={selectedDishes} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                            postComment={props.postComment} />


                    </div>

                </div>
            </div>
        );


    } else
        return null
}


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(event) {
        event.preventDefault()
        this.toggleModal();
        this.props.addComment(this.props.dishId, this.rating.value,
            this.author.value, this.comment.value);
        this.props.postComment(this.props.dishId, this.rating.value,
            this.author.value, this.comment.value);
    }
    render() {
        return (
            <div>
                <Button onClick={this.toggleModal}>
                    <span className="btn btn-light"></span>Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" id="rating" name="rating"
                                    innerRef={(input) => this.rating = input}>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author">Họ Tên</Label>
                                <Input type="text" id="author" name="author"
                                    innerRef={(input) => this.author = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="text" id="comment" name="comment"
                                    innerRef={(input) => this.comment = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

export default DishDetail;

