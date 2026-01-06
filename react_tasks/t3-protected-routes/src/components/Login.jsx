import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const { login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const checkSubmit = () => {
    const valid = login(email, pass);
    if (valid) {
      navigate("/dashboard");
      setError("");
      return true;
    } else {
      setError("Invalid email or pass");
      return false;
    }
  };
  return (
    <Form className="d-flex flex-column justify-content-center align-items-center">
      {error && <p className="text-danger">{error}</p>}

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Button
        variant="primary"
        disabled={!email || !pass}
        onClick={checkSubmit}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Login;
