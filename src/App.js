import './App.css';
import 'materialize-css';
import { Row, Col, Container } from 'react-materialize';
import Navbar from './components/layouts/navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row>
          <Col><h1 className="App-header">What Do I Do Now?</h1></Col>
        </Row>
      </Container>
    </div> 
  );
}

export default App;
