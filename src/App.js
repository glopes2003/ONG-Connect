import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import Login from "./pages/Login"
import Register from "./pages/Register"
import Query from "./pages/Query";
import Options from "./pages/Options";
import Results from './pages/Results';

const App = () => {

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register title="Registro" />} />
          <Route path="/query"  element={<Query title="Faça a sua consulta" />} />
          <Route path="/results"  element={<Results title="Resultados" />} />
          <Route path="/options"  element={<Options />} />
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
)

}

export default App; 