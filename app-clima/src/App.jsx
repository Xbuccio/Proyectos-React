import { useState } from 'react';
import Nav from "./layouts/Nav";
import Layout from "./layouts/layout";
import Ajustes from "./containers/Ajustes";

function App() {
  const [ajustesNav, setAjustesNav] = useState(false);
  const [ubicacion, setUbicacion] = useState(null);

  return (
    <>
      <Nav setAjustesNav={setAjustesNav} setUbicacion={setUbicacion} />
      <Ajustes ajustesNav={ajustesNav} setAjustesNav={setAjustesNav} setUbicacion={setUbicacion} />
      <Layout ajustesNav={ajustesNav} ubicacion={ubicacion} setUbicacion={setUbicacion} />
    </>
  )
}

export default App;


