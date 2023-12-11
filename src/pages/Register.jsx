/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { addNewUser } from "../model/users"; // Substitua pelo caminho real

const Register = (props) => {
  const [newUserData, setNewUserData] = useState({
    cpf: "",
    rg: "",
    nacionalidade: "",
    nomeCompleto: "",
    dataNascimento: "",
    sexo: "",
    endereco: "",
    complemento: "",
    numero: "",
    cep: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    const requiredFields = ["cpf", "rg", "nomeCompleto", "dataNascimento", "sexo", "endereco", "numero", "cep", "cidade", "estado"];
    const missingFields = requiredFields.filter(field => !newUserData[field]);

    if (missingFields.length > 0) {
      alert(`Por favor, preencha todos os campos obrigatórios: ${missingFields.join(", ")}`);
      return;
    }
    addNewUser(newUserData);

    setNewUserData({
      cpf: "",
      rg: "",
      nacionalidade: "",
      nomeCompleto: "",
      dataNascimento: "",
      sexo: "",
      endereco: "",
      complemento: "",
      numero: "",
      cep: "",
      cidade: "",
      estado: "",
    });
    alert("Novo usuário registrado e adicionado ao banco de dados!");
    
  };

  return (
    <section className="position-absolute top-50 start-50 translate-middle p-4 window radius shadow">
      <Link to="/options"><i className="bi bi-x float-end icon-window"></i></Link>
      <header className="d-flex flex-column justify-content-center align-items-center">
        <img src={logo} />
        <p className="text-center fs-2 text-white mt-3">{props.title}</p>
      </header>
      <form>
        <div className="container my-4">
          <span className="d-flex justify-content-between">
            <input
              className="bg-light w-25 me-2"
              type="text"
              name="cpf"
              placeholder="CPF"
              value={newUserData.CPF}
              onChange={handleChange}
            />
            <input
              className="bg-light w-25"
              type="text"
              name="rg"
              placeholder="RG"
              value={newUserData.RG}
              onChange={handleChange}
            />
            <input
              className="bg-light w-50 ms-2"
              type="text"
              name="nacionalidade"              
              placeholder="Nacionalidade"
              value={newUserData.Nacionalidade}
              onChange={handleChange}
            />
          </span>
          <span className="d-flex justify-content-between">
            <input
              className="bg-light w-50 me-2"
              type="text"
              name="nomeCompleto"
              placeholder="Nome Completo"
              value={newUserData.Nome}
              onChange={handleChange}
            />
            <input
              className="bg-light w-25"
              type="date"
              name="dataNascimento"
              placeholder="Data de Nascimento"
              value={newUserData.Birth_Date}
              onChange={handleChange}
            />
            <input
              className="bg-light w-25 ms-2"
              type="text"
              name="sexo"
              placeholder="Sexo"
              value={newUserData.Sexo}
              onChange={handleChange}
            />
          </span>
          <span className="d-flex justify-content-between">
            <input
              className="bg-light w-50 me-2"
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={newUserData.Endereco}
              onChange={handleChange}
            />
            <input
              className="bg-light w-25"
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={newUserData.Complemento}
              onChange={handleChange}
            />
            <input
              className="bg-light w-25 ms-2"
              type="text"
              name="numero"
              placeholder="Nº"
              value={newUserData.Numero}
              onChange={handleChange}
            />
          </span>
          <span className="d-flex">
            <input
              className="bg-light w-25"
              type="text"
              name="cep"
              placeholder="CEP"
              value={newUserData.CEP}
              onChange={handleChange}
            />
            <input
              className="bg-light w-25 ms-2"
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={newUserData.Cidade}
              onChange={handleChange}
            />
            <input
              className="bg-light w-25 ms-2"
              type="text"
              name="estado"
              placeholder="Estado"
              value={newUserData.Estado}
              onChange={handleChange}
            />
          </span>
          <span className="d-flex justify-content-center align-items-center">
            <button
              className="bg-light border-0 rounded-pill p-2 w-25 mt-5 fw-medium shadow"
              type="button"
              onClick={handleRegister}
            >
              REGISTRAR
            </button>
          </span>
        </div>
      </form>
    </section>
  );
};

export default Register;