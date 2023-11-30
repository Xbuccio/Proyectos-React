import "../styles/Projects.css"

function Projects() {
  return (
    <section className="project">
      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide card1-front">
              <p>Hover Me</p>
            </div>
            <div className="backSide">
              <p className="title target-font">Spotify Clon</p>
              <p className="target-font">Una version propia del famoso reproductor musical</p>
              <a href="">Go it!</a>
            </div>
          </div>
        </div>

        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide card2-front">
              <p>Hover Me</p>
            </div>
            <div className="backSide">
              <p className="title target-font">Pokedex</p>
              <p className="target-font">Desde la primera hasta la ultima generacion, estan todos!</p>
              <a href="../">Go it!</a>
            </div>
          </div>
        </div>

        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide card3-front">
              <p>Hover Me</p>
            </div>
            <div className="backSide">
              <p className="title target-font">Galeria de Juegos</p>
              <p className="target-font">TaTeTi, 4 en linea y mas!</p>
              <a href="">Go it!</a>
            </div>
          </div>
        </div>

        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide card4-front">
              <p>Hover Me</p>
            </div>
            <div className="backSide">
              <p className="title target-font">BACK SIDE</p>
              <p className="target-font">TaTeTi, 4 en linea y mas!</p>
              <a href="">Go it!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects