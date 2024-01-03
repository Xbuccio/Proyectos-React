import '../styles/ChampionGalery.css'; // Asegúrate de importar tus estilos

const SliderSection = () => {
  return (
    <section className='galery-section'>
      <div className="slider">
        <div name="img_1">
          <img
            src="https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="img_1"
          />
        </div>
        <a name="img_2">
          <img
            src="https://images.unsplash.com/photo-1504713721722-f73b4ccdfe6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="img_2"
          />
        </a>
        <a name="img_3">
          <img
            src="https://images.unsplash.com/photo-1532458198880-add09ce3b2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="img_3"
          />
        </a>
        <a name="img_4">
          <img
            src="https://images.unsplash.com/photo-1524767615-3d4139c938a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
            alt="img_4"
          />
        </a>
      </div>

      <div
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% -20%,#7877c64d,#fff0)',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          left: 0,
          zIndex: -1,
        }}
      ></div>

      <ul className="markers">
        <li>
          <a href="#img_1"></a>
        </li>
        <li>
          <a href="#img_2"></a>
        </li>
        <li>
          <a href="#img_3"></a>
        </li>
        <li>
          <a href="#img_4"></a>
        </li>
      </ul>
    </section>
  );
};

export default SliderSection;
