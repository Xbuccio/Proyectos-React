
import Tags from "../components/Tags"
import "../styles/Layout.css"

const Layout = ({ open }) => {
  return (
    <section className={`layout ${open ? 'layout-close' : 'layout-open'}`} >
      <Tags />
    </section>
  )
}

export default Layout