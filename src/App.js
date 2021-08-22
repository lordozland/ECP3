import './App.css';
import 'materialize-css';
import { Row, Col, Container } from 'react-materialize';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><h1 className="App-header">What Do I Do Now?</h1></Col>
        </Row>
      </Container>
    </div> 
  );
}

export default App;
