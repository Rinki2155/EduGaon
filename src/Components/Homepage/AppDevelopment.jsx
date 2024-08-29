import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ADevelopment(props) {
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

export default function AppDevelopment() {
  return (
    <>
      <ADevelopment
        image="https://th.bing.com/th/id/OIP.nOiqIEoh5pcWAY_uRysELAHaDt?pid=ImgDet&rs=1"
        Title="App development is the process in which developers create an application to be used on smartphones, tablets and other mobile devices."
        Time="2 years"
        Plateform="online"
      />
    </>
  );
}
