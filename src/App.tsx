import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import PocketNotes from "../src/pages/pocketnotes"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PocketNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
