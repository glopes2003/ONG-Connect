import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoBlue from "../images/logo-blue.svg";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();

    if (username === "teste@teste.com" && password === "123456") {
      navigate("/options");
    } else {
      alert("Nome de usuário ou senha incorretos");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center outer-wrapper">
        <section className="position-absolute top-50 start-50 translate-middle bg-white d-flex flex-column justify-content-evenly align-items-center container shadow-lg wrapper radius">
          <header className="d-flex flex-column justify-content-center align-items-center">
            <img src={logoBlue} alt="Logo" />
            <p className="fw-semibold fs-3">LOG IN</p>
          </header>

          <form onSubmit={handleLogIn}>
            <div className="mb-2">
              <span className="position-absolute mt-2 mx-2">
                <i className="bi bi-person icon-login"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 border-bottom ps-4"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <span className="position-absolute mt-2 mx-2">
                <i className="bi bi-lock icon-login"></i>
              </span>
              <input
                type="password"
                className="form-control border-0 border-bottom ps-4"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label
                className="form-check-label ms-2 mt-1 checkbox"
                htmlFor="rememberMe"
              >
                Lembre-se de mim
              </label>
            </div>
            <span className="d-flex justify-content-center align-items-center mt-5">
              <button
                type="submit"
                className="login-btn border-0 rounded-pill text-white p-2 w-75"
              >
                ENTRAR
              </button>
            </span>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;