import React, { useState } from "react";
import Header from "./components/Header.js";
import Formulario from "./components/Formulario.js";
import Resumen from "./components/Resumen.js";
import Resultado from "./components/Resultado.js";
import Spinner from "./components/Spinner.js";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });
  const [cargando, setCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <React.Fragment>
      <Contenedor>
        <Header titulo="Cotizador de seguros" />

        <ContenedorFormulario>
          <Formulario setResumen={setResumen} setCargando={setCargando} />
          {cargando ? <Spinner /> : null}

          {!cargando ? <Resumen datos={datos} /> : null}
          {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
        </ContenedorFormulario>
      </Contenedor>
    </React.Fragment>
  );
}

export default App;
