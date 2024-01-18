import { useState } from 'react';
import Nav from './contain/nav';
import Layout from './contain/layout';
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