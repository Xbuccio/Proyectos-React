
import Tags from "../components/Tags"
import MusicSearch from "../components/ejemplo"
import "../styles/Layout.css"

const Layout = ({ open }) => {
  return (
    <section className={`layout ${open ? 'layout-close' : 'layout-open'}`} >
      <Tags />
      <MusicSearch />
    </section>
  )
}

export default Layout