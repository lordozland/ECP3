import './App.css';
import 'materialize-css';
import Navbar from './components/layout/Navbar';
import Tracks from './components/layout/Tracks';

function App() {
  return (
    <div>
      <Navbar />
      <Tracks />
        <div class="container">
            <div class="row">

            <h3 class="center">Rebuilding in React</h3>

            <p>Recently broke a guitar.  Album is currently complete as it will remain until I get another 7 string.  Writing new material after I finish my coding bootcamp in three/four weeks.  Thank you for your patience.</p>

            </div>
        </div>
    </div>
  );
}

export default App;
