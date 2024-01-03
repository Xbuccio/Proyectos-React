import '../styles/Nav.css'

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        {/* Botón de Inicio */}
        <button className="nav-button">Inicio</button>

        {/* Elementos de relleno */}
        <div className="nav-fillers">
          <a href="#seccion1">Sección 1</a>
          <a href="#seccion2">Sección 2</a>
          <a href="#seccion3">Sección 3</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;