import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Why() {
  return (
    <>
      <Container className="my-4">
        <Row>
          <Col className="my-4">
            <h1 className="py-2">
              Why choose EduGaon Institute Learning courses?
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-4">
            <Card style={{ width: "100%" }}>
              <img src="images/discuss.webp" alt="image" style={{ width: "100%" }} />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text style={{ fontSize: "25px" }}>
                  Get Personalized Guidance Weekly mentorship sessions with
                  Industry Experts along with Personalized attention in small
                  groups of 5-15 learners. Gain hands-on exposure through
                  industry-relevant projects
                </Card.Text>
                <Button variant="primary" size="lg" active>
                  Know More
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="py-4">
        <h1 className="py-2" style={{ textAlign: "center" }}>
          GL Excelerate Dedicated Career Support
        </h1>
        <Row className="py-5">
          <Col xs={12} sm={12} md={6} lg={6} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text style={{ fontSize: "25px" }}>
                  Get Personalized Guidance Weekly mentorship sessions with
                  Industry Experts along with Personalized attention in small
                  groups of 5-15 learners. Gain hands-on exposure through
                  industry-relevant projects
                </Card.Text>
                <Button variant="primary" size="lg" active>
                  Know More
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-4">
            <Card style={{ width: "100%" }}>
              <img src="images/dadication.jpeg" alt="image" style={{ width: "100%" }} />
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-4">
        <Row>
          <Col className="my-4">
            <h1 className="py-2">Networking and Program Support</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-4">
            <Card style={{ width: "100%" }}>
              <img src="images/csupport.jpeg" alt="image" style={{ width: "100%" }} />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text style={{ fontSize: "25px" }}>
                  Get Personalized Guidance Weekly mentorship sessions with
                  Industry Experts along with Personalized attention in small
                  groups of 5-15 learners. Gain hands-on exposure through
                  industry-relevant projects
                </Card.Text>
                <Button variant="primary" size="lg" active>
                  Know More
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-4">
        <Row>
          <Col className="my-4" style={{ textAlign: "center" }}>
            <b>Providing online education for</b>
            <h1>Learners across 170+ countries</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <img
              src="https://ww1.issa.int/sites/default/files/styles/featured_screen_mobile/public/images/guideline/HRM-sml.jpg?h=77c67179&itok=VIlZdgT8"
              alt="image"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="gradient">
          <Col xs={12} sm={12} md={6} lg={6} className="mb-4">
            <h3 className="my-4 mx-4 gredtext">
              Our mission is to empower rural students in India by
              <br /> improving their <b>English communication skills</b> and
              trained
              <br /> <b>them with emerging technology.</b>
            </h3>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-4">
            <img src="images/mission.jpeg" alt="image" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
