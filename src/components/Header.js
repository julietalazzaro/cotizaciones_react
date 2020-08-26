import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weigth: bold;
  color: #ffffff;
`;

const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", Serif;
  text-align: center;
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

Header.prototype = {
  titulo: PropTypes.string.isRequired,
};
export default Header;
