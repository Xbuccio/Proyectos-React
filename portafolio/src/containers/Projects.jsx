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
              <p className="title">Spotify Clon</p>
              <p>Una version propia del famoso reproductor musical</p>
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
              <p className="title">Pokedex</p>
              <p>Desde la primera hasta la ultima generacion, estan todos!</p>
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
              <p className="title">Galeria de Juegos</p>
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
              <p className="title">BACK SIDE</p>
              <a href="">Go it!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects