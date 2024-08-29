import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Communication(props) {
  return (
    <Container className="py-4">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {Array.from(Array(6)).map((_, index) => (
          <Col key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.image} />
              <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>{props.Text}</Card.Text>
                <Button variant="primary" className="mx-3">
                  {props.Time}
                </Button>
                <Button variant="primary">{props.Plateform}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default function EngComm() {
  return (
    <Communication
      image="https://i0.wp.com/smartlifesource.com/wp-content/uploads/2021/06/Professional-Communication-Skills.jpg?w=640&ssl=1"
      Title="Web development refers to the creating, building, and maintaining of websites."
      Time="2 years"
      Plateform="online"
    />
  );
}
