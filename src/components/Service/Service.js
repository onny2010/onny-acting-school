import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    return (
        <div className="service-container">
            <Col>
                <Card className="service">
                    <Card.Img className="image" variant="top" src={props.service.img} />
                    <Card.Body>
                        <Card.Title>{props.service.name}</Card.Title>
                        <Card.Text className="service-text">{props.service.description}</Card.Text>
                        <button className="btn btn-dark">click me</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;