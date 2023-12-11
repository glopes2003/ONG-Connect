/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

//passing userData to results components
const Results = ( props) => {
  const location = useLocation();
  const userData = new URLSearchParams(location.search);

    return (
        <section className="position-absolute top-50 start-50 translate-middle p-4 window radius">
          <Link to="/options">
            <i className="bi bi-x float-end icon-window"></i>
          </Link>
          <header className="d-flex flex-column justify-content-center align-items-center">
            <img src={logo} alt="Logo" />
            <p className="text-center fs-2 text-white mt-3">{props.title}</p>
          </header>
          <div className="container my-4">
          <span className="d-flex justify-content-between">
            <input
              className="bg-light w-25 me-2"
              type="text" readOnly
              name="cpf"
              placeholder="CPF"
              value={userData ? userData.get("cpf") : ""}   // if it exists, fill it with the user value
            />
            <input
              className="bg-light w-25"
              type="text" readOnly
              name="rg"
              placeholder="RG"
              value={userData ? userData.get("rg") : ""}
            />
            <input
              className="bg-light w-50 ms-2"
              type="text" readOnly
              name="nacionalidade"              
              placeholder="Nacionalidade"
              value={userData ? userData.get("nacionalidade") : ""}
            />
          </span>
          <span className="d-flex justify-content-between">
            <input
              className="bg-light w-50 me-2"
              type="text" readOnly
              name="nomeCompleto"
              placeholder="Nome Completo"
              value={userData ? userData.get("nome") : ""}
            />
            <input
              className="bg-light w-25"
              type="text" readOnly
              name="dataNascimento"
              placeholder="Data de Nascimento"
              value={userData ? userData.get("birthDate") : ""}
            />
            <input
              className="bg-light w-25 ms-2"
              type="text" readOnly
              name="sexo"
              placeholder="Sexo"
              value={userData ? userData.get("sexo") : ""}
            />
          </span>
          <span className="d-flex justify-content-between">
            <input
              className="bg-light w-50 me-2"
              type="text" readOnly
              name="endereco"
              placeholder="Endereço"
              value={userData ? userData.get("endereco") : ""}
            />
            <input
              className="bg-light w-25"
              type="text" readOnly
              name="complemento"
              placeholder="Complemento"
              value={userData ? userData.get("complemento") : ""}
            />
            <input
              className="bg-light w-25 ms-2"
              type="text" readOnly
              name="numero"
              placeholder="Nº"
              value={userData ? userData.get("numero") : ""}
            />
          </span>
          <span className="d-flex">
            <input
              className="bg-light w-25"
              type="text" readOnly
              name="cep"
              placeholder="CEP"
              value={userData ? userData.get("cep") : ""}
            />
            <input
              className="bg-light w-25 ms-2"
              type="text" readOnly
              name="cidade"
              placeholder="Cidade"
              value={userData ? userData.get("cidade") : ""}
            />
            <input
              className="bg-light w-25 ms-2"
              type="text" readOnly
              name="estado"
              placeholder="Estado"
              value={userData ? userData.get("estado") : ""}
            />
          </span>
          </div>
        </section>
      );
    
}

export default Results;