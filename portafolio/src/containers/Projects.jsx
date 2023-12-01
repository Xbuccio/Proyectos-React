import { useContext } from "react"
import LanguageContext from "../components/LanguageContext"
import "../styles/Projects.css"

function Projects() {
  const { language } = useContext(LanguageContext)

  return (
    <section className="project">
      <h1>{language ? 'Projectos' : 'Projects'}</h1>

      <div className="projects-grid">
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide card1-front">
              <p>{language ? 'Pulsa aquí' : 'Hover Me'}</p>
            </div>
            <div className="backSide">
              <p className="title target-font">{language ? 'Clon de Spotify' : 'Spotify Clon'}</p>
              <p className="target-font">
                {language
                  ? 'Una versión propia del famoso reproductor musical'
                  : 'A proprietary version of the famous music player'
                }
              </p>
              <a href="#">{language ? '¡Mira más!' : 'Go it!'}</a>
            </div>
          </div>
        </div>

        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide card2-front">
              <p>{language ? 'Pulsa aquí' : 'Hover Me'}</p>
            </div>
            <div className="backSide">
              <p className="title target-font">{language ? 'Pokedex' : 'Pokedex'}</p>
              <p className="target-font">
                {language
                  ? 'Desde la primera hasta la última generación, ¡están todos!'
                  : 'From the first to the last generation, they\'re all here!'
                }
              </p>
              <a href="#">{language ? '¡Mira más!' : 'Go it!'}</a>
            </div>
          </div>
        </div>

        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide card3-front">
              <p>{language ? 'Pulsa aquí' : 'Hover Me'}</p>
            </div>
            <div className="backSide">
              <p className="title target-font">{language ? 'Galería de Juegos' : 'Game Gallery'}</p>
              <p className="target-font">{language ? 'TaTeTi, 4 en línea y más!' : ' Tic Tac Toe, Connect 4, and more!'}</p>
              <a href="#">{language ? '¡Mira más!' : 'Go it!'}</a>
            </div>
          </div>
        </div>

        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide card4-front">
              <p>{language ? 'Pulsa aquí' : 'Hover Me'}</p>
            </div>
            <div className="backSide">
              <p className="title target-font">{language ? 'Hola' : 'Hello'}</p>
              <p className="target-font">
                {language ? 'TaTeTi, 4 en línea y más!' : 'Tic Tac Toe, Connect 4, and more!'}
              </p>
              <a href="#">{language ? '¡Mira más!' : 'Go it!'}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects