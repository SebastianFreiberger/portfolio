import './ContentIntro.css'
import Button from './ButtonStart'

const Content = () => {
    return (
      <main className="content-main">
        <div className="block-info">
          <div className="info-text">
            <h1>¡ Bienvenidos a mi Portfolio !</h1>
            <p>
              Me llamo Sebastian Freiberger soy desarrollador web full stack con
              experiencia en programación y diseño web. Me especializo tanto en
              el desarrollo del lado del servidor (back end) como en la creación
              de interfaces de usuario (front end). Mi objetivo principal es
              aplicar los conocimientos adquiridos y seguir desarrollándome
              profesionalmente en el campo de la tecnología.
            </p>
            <p>
              Los invito a recorrer las diferentes practicas que fui llevando a
              cabo hasta el momento.
            </p>
            <p>Que lo disfruten !!</p>
          </div>
          <div className="content-image">
            <img
              src="https://imageup.me/images/32507d8f-0615-4d48-974b-43abef58ab73.jpeg"
              alt="perfil-img"
            ></img>
          </div>
        </div>    
        <Button />
      </main>
    );
}

export default Content