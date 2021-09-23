import React from 'react';

import dateFormat from 'dateformat';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish(props) {

    return (
        <Card>
            <CardImg width="100%" key={props.dish.id} src={props.dish.image} alt={props.dish.name} />
            <CardTitle>{props.dish.name}</CardTitle>
        </Card>
    );
}
function RenderComments(props) {
    return (
        <div className="col-12 col-md-6 m-1">
            {
                props.comments.map(el =>
                    <Card key={el.dishId}>
                        <CardText>{el.name}</CardText>
                        <CardText>{el.comment}</CardText>
                        <CardText>Đánh giá {el.rating} sao</CardText>
                        <CardText>{dateFormat(props.comments.date)}</CardText>
                        <CardText>{el.author}</CardText>
                    </Card>
                )
            }
        </div>
    )
}
const DishDetail = (props) => {
    console.log('props.comments', props.comments);

    if (props.dish != null) {

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
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );


    } else
        return null
}


export default DishDetail;

