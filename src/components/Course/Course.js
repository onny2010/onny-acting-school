import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    return (
        <div className="card-container">
            <Col>
                <Card className="course">
                    <Card.Img className="card-image" variant="top" src={props.course.img} />
                    <Card.Body>
                        <Card.Title className="text-light">{props.course.title}</Card.Title>
                        <Card.Text>{props.course.description}</Card.Text>
                        <button className="btn btn-dark">click me</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;