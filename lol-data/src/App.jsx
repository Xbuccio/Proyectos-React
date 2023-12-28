import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './containers/Layout';
import Champions from './components/Champions';
import ChampionDetails from './components/ChampionDetails';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout> <Champions /> </Layout>}
        />
        <Route 
          path="/:id" 
          element={<Layout> <ChampionDetails /> </Layout>} 
        />
      </Routes>
    </Router>
  );
}

export default App;