import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import dateFormat from 'dateformat';
class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        if (this.props.dishes != null) {
            const comments = this.props.dishes.comments.map((comment) => {
                return (
                    <div className="col-12 col-md-5 m-1">
                        <CardBody key={comment.id}>
                            <CardText>{comment.rating}</CardText>
                            <CardText>{comment.comment}</CardText>
                            <CardText
                            
                            >{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).
                            format(new Date(Date.parse(comment.date)))}</CardText>
                            <CardText>{comment.author}</CardText>
                        </CardBody>
                    </div>
                );
            });
            const selectedDishes = this.props.dishes;
            return (
                <div className="container">
                    <div className="col-sm-6 col-md-4 mt-5">
                        <Card className="card">
                            <CardBody className="card-body">
                                <CardTitle className="card-title" tag="h5"> {selectedDishes.name}</CardTitle>
                                <CardText>{selectedDishes.description}</CardText>
                            </CardBody>
                            <Card>
                                <CardTitle>Comment</CardTitle>
                                {comments}
                            </Card>
                          
                        </Card>
                    </div>
                </div>

            );

        } else
            return null
    }
}

export default DishDetail;

