/* eslint-disable react/prop-types */
import { getUserByName } from "../../model/users";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

const Window = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const queryUser = () => {
    // Checks if user already exists
    const user = getUserByName(name);

    if (user) {
      // User data as query parameters
      const queryParams = new URLSearchParams({
        cpf: user.CPF,
        rg: user.RG,
        nacionalidade: user.Nacionalidade,
        nome: user.Nome,
        birthDate: user.Birth_Date,
        sexo: user.Sexo,
        endereco: user.Endereco,
        complemento: user.Complemento,
        numero: user.Numero,
        cep: user.CEP,
        cidade: user.Cidade,
        estado: user.Estado,
      });

      // Navigate to the results page with query parameters
      navigate(`/results?${queryParams.toString()}`);
    } else {
      alert("Cadastro não encontrado");
    }
  };

  return (
    <section className="p-4 window radius">
      <Link to="/options">
        <i className="bi bi-x float-end icon-window"></i>
      </Link>
      <header className="d-flex flex-column justify-content-center align-items-center">
        <img src={logo} alt="Logo" />
        <p className="text-center fs-2 text-white mt-3">{props.title}</p>
      </header>
      <form className="d-flex flex-column justify-content-center align-items-center">
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control bg-light border-0 p-2 w-100 mt-4 radius-small shadow"
          type="text"
          placeholder="Nome Completo"
        />
        <button
          id="button"
          onClick={queryUser}
          className="bg-light border-0 rounded-pill p-2 w-25 mt-5 fw-medium shadow"
          type="button"
        >
          CONSULTAR
        </button>
      </form>
    </section>
  );
};

export default Window;