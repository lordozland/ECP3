import './App.css';
import 'materialize-css';
import Navbar from './components/layout/Navbar';
import Tracks from './components/layout/Tracks';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Tracks />  
    <Route path="/" component={MainPage} />
    <Route path="/Contact" component={Contact} />
    </div>
    </Router>
  );
}

// class App extends Component {
//   render() {
//     return <Router>
//       <Route path="/" component={MainPage} />
//     </Router>
//   }
// }

export default App;
