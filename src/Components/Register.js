import React, { Component } from "react";
import { Button, Card, Col, Container, Form, Input, Row } from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      EmployeeName: "",
      City: "",
      Email: "",
      Password: "",
      Department: "",
    };
    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.EmployeeName = this.EmployeeName.bind(this);
    this.Password = this.Password.bind(this);
    this.Department = this.Department.bind(this);
    this.City = this.City.bind(this);
    this.register = this.register.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Department(event) {
    this.setState({ Department: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }
  City(event) {
    this.setState({ City: event.target.value });
  }
  EmployeeName(event) {
    this.setState({ EmployeeName: event.target.value });
  }
  register(event) {
    fetch("http://localhost:51282/Api/login/InsertEmployee", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        EmployeeName: this.state.EmployeeName,
        Password: this.state.Password,
        Email: this.state.Email,
        City: this.state.City,
        Department: this.state.Department,
      }),
    })
      .then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status === "Success") this.props.history.push("/Dashboard");
        else alert("Sorry !!!! Unauthenticated User !!!!");
      });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <div className="p-4">
                  <Form>
                    <div className="row mb-2 pageheading">
                      <div className="col-sm-12 btn btn-primary" style={{ width: "200px" }}>
                        Sign Up
                      </div>
                    </div>
                    <Input type="text" onChange={this.EmployeeName} placeholder="Enter Employee Name" className="mb-3" />
                    <Input type="text" onChange={this.Email} placeholder="Enter Email" className="mb-3" />
                    <Input type="password" onChange={this.Password} placeholder="Enter Password" className="mb-3" />
                    <Input type="text" onChange={this.City} placeholder="Enter City" className="mb-4" />
                    <Input type="text" onChange={this.Department} placeholder="Enter Department" className="mb-4" />
                    <Button onClick={this.register} color="success" style={{ width: "200px" }} block>
                      Create Account
                    </Button>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
