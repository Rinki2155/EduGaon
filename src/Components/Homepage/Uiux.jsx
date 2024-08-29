import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Ui(props) {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
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

export default function Uiux() {
  return (
    <Ui
      image="https://www.subarnabhandari.com/wp-content/uploads/2020/05/Ui-and-UX-Design.jpg"
      Title="Web development refers to the creating, building, and maintaining of websites. "
      Text="Some description text here."
      Time="2 years"
      Plateform="online"
    />
  );
}
