  import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  import Navbar from 'react-bootstrap/Navbar';
  import Row from 'react-bootstrap/Row';

  function NavScrollExample({isLoggedIn , login , logout,user}) {
    return (
      <Container fluid>
        <Row>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container fluid className="d-flex justify-content-end">
              {isLoggedIn ? <Button variant="outline-primary" onClick={logout} >logout</Button> :
              <Button variant="outline-primary" onClick={login}>login</Button>}
        </Container>
      </Navbar>
      </Row>
      <Row className='d-flex justify-content-center align-items-center' >
        <h3>{isLoggedIn ? `Welcome ${user}`: "please login to continue"}</h3>
      </Row>

      </Container>
    );
  }

  export default NavScrollExample;