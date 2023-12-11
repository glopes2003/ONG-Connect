import ProfileIcon from "./components/profileIcon";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <>
      <section className="options-background">
        <img src="../src/assets/big-logo.svg"/>
        <div className="text_container">
          <p>
            Explore nosso serviço de <br />
            banco de dados, oferecendo <br />
            opções dinâmicas para <br />
            atender às suas necessidades. <br />
            Deseja <span>consultar</span> informações <br />
            cruciais com agilidade ou <br />
            <span>registrar</span> documentos de forma <br />
            eficiente?
          </p>
        </div>
        <div className="user_container">
          <ProfileIcon />
        </div>

        <div className="button_container">
          <Link to="/query">
            <button>Consultar</button>
          </Link>
          <Link to="/register">
            <button>Registrar</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Options;