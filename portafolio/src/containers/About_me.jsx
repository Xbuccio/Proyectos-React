import { HTML5Icon, CSS3Icon, JavaScriptIcon, TypeScriptIcon, ReactIcon, Tailwindcss, Astro, Vite, NodeJs, Figma, Python, Sass } from '../icons/icons';
import "../styles/About_me.css"

function About_Me() {
  return (
    <section className="about_me">
      <h1>About me</h1>
      <p className='about_me_p'>
        I consider myself a resourceful and proactive person. I can excel in jobs that require teamwork, thanks to my experience.
      </p>
      <p className='about_me_p'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quas repudiandae eaque voluptatibus! Reprehenderit minima, iusto harum sint porro soluta ut nihil tenetur velit, quos voluptas culpa officiis doloremque animi?
      </p>
      <p className='about_me_p'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quas repudiandae eaque voluptatibus! Reprehenderit minima, iusto harum sint porro soluta ut nihil tenetur velit, quos voluptas culpa officiis doloremque animi?
      </p>
      <hr />
      <div className='about_me_exp'>
        <div>
          <h3 className='about_me_barra'>Experience</h3>
          <ul className="about_me_list">
            <li><span className="about_me_span">2022 - Today</span> Hospital Simplemente Evita</li>
            <li><h4>System and Network Maintenance</h4></li>
            <li><p>I solve any problems that may arise with the hospital s PCs, from hardware and software issues to network and database management.</p></li>
          </ul>
        </div>
        <div>
          <h3 className='about_me_barra'>Studies</h3>
          <ul className="about_me_list">
            <li><span className="about_me_span2">2021 - In progress</span></li>
            <li><h4>Computer Engineering.</h4></li>
            <li><p>Universidad Nacional de la Matanza</p></li>

            <li><span className="about_me_span2">2020 - 2021</span></li>
            <li><h4>Course in Fundamentos de la programacion</h4></li>
            <li ><p>Universidad Tecnológica Nacional</p></li>

            <li><span className="about_me_span2">2014 - 2019</span></li>
            <li><h4>High School Diploma in Social Sciences.</h4></li>
            <li><p>Colegio Hogar San Mauricio</p></li>
          </ul>
        </div>

      </div>
      <hr />
      <div>
        <h3 className='about_me_barra'>Tecnologies</h3>
        <ul className="about_me_list_icons">
          <li>
            <HTML5Icon />
          </li>
          <li>
            <CSS3Icon />
          </li>
          <li>
            <JavaScriptIcon />
          </li>
          <li>
            <TypeScriptIcon />
          </li>
          <li>
            <ReactIcon />
          </li>
          <li>
            <NodeJs />
          </li>
          <li>
            <Astro />
          </li>
          <li>
            <Python />
          </li>
          <li>
            <Tailwindcss />
          </li>
          <li>
            <Sass />
          </li>
          <li>
            <Figma />
          </li>
          <li>
            <Vite />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About_Me