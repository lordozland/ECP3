import './App.css';
import 'materialize-css';
import Navbar from './components/layout/Navbar';
import Tracks from './components/layout/Tracks';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <Navbar />
      <Tracks />
      <Router>
        <Route path="/" component={MainPage} />
      </Router>
    </div>
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
