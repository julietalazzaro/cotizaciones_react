import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { upperFirstLetter } from "../helper.js";

const ContenedorResumen = styled.div`
  background-color: #00838f;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  color: #fff;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {upperFirstLetter(marca)}</li>
        <li>Plan: {upperFirstLetter(plan)}</li>
        <li>Año: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};
Resumen.prototype = {
  datos: PropTypes.object.isRequired,
};
export default Resumen;
