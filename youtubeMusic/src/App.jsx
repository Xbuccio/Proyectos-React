import { useState } from 'react';
import Nav from './contain/Nav';
import Layout from './contain/Layout';
import './styles/App.css';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <>
      <Nav open={open} onOpenChange={handleOpenChange} />
      <Layout open={open} />
    </>
  );
}

export default App;