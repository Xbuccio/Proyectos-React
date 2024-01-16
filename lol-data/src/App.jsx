import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './containers/Layout';
import Champions from './components/Champions';
import ChampionDetails from './components/ChampionDetails';
import './styles/App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <Layout>
                <Champions />
              </Layout>
            </>
          }
        />
        <Route 
          path="/:id" 
          element={
            <>
              <ScrollToTop />
              <Layout>
                <ChampionDetails />
              </Layout>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
