import Dashboard from './components/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <div className="App">
    <Router>
      <Dashboard />
    </Router>

    </div>
  );
}

export default App;
