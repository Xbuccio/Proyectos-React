import "../styles/Nav.css"
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Nav />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;