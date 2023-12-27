import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Champions from './components/Champions';
import ChampionDetails from './components/ChampionDetails';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Champions />} />
        <Route path="/:id" element={<ChampionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;