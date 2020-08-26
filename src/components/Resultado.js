import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
const ResultadoCotizacion = styled.div`
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  border: 1px solid #26c6da;
  padding: 0.5rem;
  text-align: center;
  position: relative;
`;
const TextoCotizacion = styled.p`
  color: #00838f;
  margin: 0;
  text-transform: uppercase;
  padding: 1rem;
  font-weight: bold;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elije marca, anio y tipo de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>
            El total es: $ <span>{cotizacion}</span>
          </TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};
Resultado.prototype = {
  cotizacion: PropTypes.number.isRequired,
};
export default Resultado;
