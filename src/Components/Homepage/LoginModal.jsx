import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import axios from 'axios';

function LoginModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:3000/login', { email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Button
        variant="outline-primary"
        style={{ color: 'white' }}
        onClick={handleShow}
      >
        Login
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>Login here...</Modal.Title>
        </Modal.Header>
        <div className="d-grid gap-4 mx-3 my-3">
          <Button
            type="submit"
            variant="outline-primary"
            size="lg"
            className="text-left"
          >
            <FaGoogle color="red" size={18} />
            <span className="ms-2">Login with Google</span>
          </Button>
          <Button
            variant="outline-secondary"
            size="lg"
            className="text-left"
          >
            <FaFacebook color="blue" size={18} />
            <span className="ms-2">Login with Facebook</span>
          </Button>
        </div>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                id="email"
                required
                type="email"
                placeholder="Enter Your Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="text-center">
              <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>
                Forgot Password
              </a>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            onClick={handleSubmit}
            size="lg"
            block
          >
            Login
          </Button>
          <Button
            variant="outline-primary"
            onClick={handleClose}
            size="lg"
            block
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
