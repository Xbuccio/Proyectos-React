import Lol from '../icons/lol.png'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav-fillers">
          <img src={Lol} alt="" className='icon-nav'/>
        </div>
        <button className="nav-button"><a href="https://league-legend-francobuccio.netlify.app/">Inicio</a></button>
      </div>
    </nav>
  );
};

export default Nav;