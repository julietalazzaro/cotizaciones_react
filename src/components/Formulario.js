import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {
  obtenerDiferenciaYear,
  obtenerPlan,
  calcularMarca,
} from "../helper.js";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
  margin-bottom: 1rem;
  align-items: center;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;
const Error = styled.div`
  background-color: #d32f2f;
  color: white;
  padding: 1rem;
  width: 475px;
  text-align: center;
  margin-bottom: 2rem;
  margin-right: 20px;
`;

const Formulario = ({ setResumen, setCargando }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  //extera valored del state.
  const { marca, year, plan } = datos;

  //guardar datos del form en state
  const obtenerInformacion = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //base 2000
    let resultado = 2000;
    //obtener diff de anios
    const diferencia = obtenerDiferenciaYear(year);
    //por cada a;o restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;
    //americano 15 //asiatico 5%  //europeo 30%
    resultado = resultado * calcularMarca(marca);
    //basico aumenta 20% //ompleto aumenta 50%
    resultado = parseFloat(resultado * obtenerPlan(plan)).toFixed(2);
    //total
    setCargando(true);
    setTimeout(() => {
      setResumen({ cotizacion: resultado, datos });
      setCargando(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label htmlFor="marca">Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="year">Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="plan">Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />
        Completo
      </Campo>

      <Button type="submit">Cotizar</Button>
    </form>
  );
};

Formulario.prototype = {
  setResumen: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired,
};

export default Formulario;
