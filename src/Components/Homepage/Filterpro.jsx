import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Badge } from 'react-bootstrap';

function Filterpro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h4 className="py-4">
        <Badge
          className="py-3"
          bg="warning"
          variant="outline-primary"
          style={{ color: 'white', cursor: 'pointer' }}
          onClick={handleShow}
        >
          Filter Programs
        </Badge>
      </h4>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-80w"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Login here...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Your Email address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>

            <div className="text-center mb-3">
              <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>
                Forgot Password
              </a>
            </div>

            <Button
              variant="outline-primary"
              onClick={handleClose}
              size="lg"
              block
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Filterpro;
