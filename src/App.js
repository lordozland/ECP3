import './App.css';
import 'materialize-css';
import { Container, Row, Col } from 'react-materialize';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col class="center"><h1>Here</h1></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
