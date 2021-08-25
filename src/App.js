import './App.css';
import 'materialize-css';
import Navbar from './components/layout/Navbar';
import Tracks from './components/layout/Tracks';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import Life from './pages/Life';

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Tracks />  
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Life" component={Life} />
    </Switch>
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
