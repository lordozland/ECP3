import './App.css';
import 'materialize-css';
import Navbar from './components/layout/Navbar';
import Tracks from './components/layout/Tracks';
import MainPage from './pages/MainPage'

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Tracks />
      <MainPage />
    </div>
  );
}

export default App;
