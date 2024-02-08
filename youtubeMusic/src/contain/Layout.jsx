
import YoutubeSearchComponent from "../API/fetch"
import FetchMusix from "../API/fetchMusix"
import Tags from "../components/Tags"
import MusicSearch from "../components/ejemplo"
import SeleccionRapida from "../components/seleccionRapida"
import "../styles/Layout.css"

const Layout = ({ open }) => {
  return (
    <section className={`layout ${open ? 'layout-close' : 'layout-open'}`} >
      <Tags />
      {/** 
       * 
      <MusicSearch />
      <SeleccionRapida />
    <YoutubeSearchComponent />
    */}
    <FetchMusix />
    </section>
  )
}

export default Layout