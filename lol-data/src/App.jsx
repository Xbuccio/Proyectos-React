import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar Routes

import Champions from "./components/Champions";
import ChampionDetails from "./components/ChampionDetails";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Champions />} />
        <Route path="/campeon/:id" element={<ChampionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;